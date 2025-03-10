import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Modal,
  Typography,
  Breadcrumbs,
  Crumb,
} from '@strapi/design-system';

import { Form, type FormHelpers } from '../ui/Form';
import { InputRenderer } from '../ui/FormInputs/Renderer';
import { FormLayoutInputProps } from '../../types/forms';
import { useNotification } from '../../features/Notifications';

import { StepView } from '../StepView';

type FormLayout = FormLayoutInputProps[][];

interface ProcessStepDetailsData {
  name: string;
  description: string | null,
  process_uuid: string;
  position: number;
  agent_profile_uuid: string;
  retry_limit: number;
  temperature: number;
  segmentation: boolean;
  timeout: number | null,
  uuid: string;
}

interface ProcessDetailsData {
  id: string;
  name: string;
  description: string;
  timeout: number;
  steps?: ProcessStepDetailsData[];
}

interface ProcessDetailsFormProps {
  headerTitle: string,
  modelData: ProcessDetailsData,
  onToggle: (success: boolean) => void;
}

const FORM_BASE_LAYOUT = [
  [
    {
      label: 'ID',
      name: 'id',
      type: 'string' as const,
      size: 12,
      disabled: true,
    },
  ],
  [
    {
      label: 'Name',
      name: 'name',
      type: 'string' as const,
      size: 8,
    },
    {
      label: 'Timeout',
      name: 'timeout',
      type: 'float' as const,
      size: 4,
      disabled: true,
    },
  ],
] satisfies FormLayout;

const ProcessDetailsForm = ({ headerTitle, modelData, onToggle }: ProcessDetailsFormProps) => {
  const [formValues, setFormValues] = React.useState<ProcessDetailsData>({ ...modelData })
  const { toggleNotification } = useNotification();

  // const updateAgent = async (data: ProcessDetailsData) => {
  //   const payload = {}
  //   const res = await fetch(`https://llm.cnnews.xplr.ru/v1/agent-profile/${data.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //   return await res.json()
  // }

  const fetchProcessSteps = (processId: string) => {
    const url = `https://llm.cnnews.xplr.ru/v1/process-step/process/${processId}`
    const res = fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json
      });
    console.log(res);
    return res
  }

  const handleSubmit = async (body: ProcessDetailsData, { setErrors }: FormHelpers<ProcessDetailsData>) => {
    console.log(body)
    onToggle(false);
  };

  React.useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchProcessSteps(formValues.id).then((data) => {
        setFormValues({ ...formValues, steps: data.steps });
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Modal.Root defaultOpen onOpenChange={() => { onToggle(true) }}>
      <Modal.Content>
        <Modal.Header>
          <Breadcrumbs label={headerTitle}>
            <Crumb isCurrent>{headerTitle}</Crumb>
          </Breadcrumbs>
        </Modal.Header>
        <Form
          method="POST"
          initialValues={formValues ?? {}}
          onSubmit={handleSubmit}
        >
          <>
            <Modal.Body>
              <Flex direction="column" alignItems="stretch" gap={6}>
                <Box>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      <Grid.Root gap={5}>
                        {FORM_BASE_LAYOUT.map((row) => {
                          return row.map(({ size, ...field }) => {
                            return (
                              <Grid.Item
                                key={field.name}
                                col={size}
                                direction="column"
                                alignItems="stretch"
                              >
                                <InputRenderer
                                  {...field}
                                  disabled={field.disabled ?? false}
                                  label={field.label}
                                  placeholder={field.placeholder ?? ""}
                                />
                              </Grid.Item>
                            );
                          });
                        })}
                      </Grid.Root>
                    </Flex>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="beta" tag="h2">Steps</Typography>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      {formValues.steps && formValues.steps.map((step) => {
                        return (
                          <details style={{
                            'borderWidth': 1 + 'px',
                            'borderColor': '#eee',
                            'borderStyle': 'solid',
                            'padding': 8 + 'px',
                          }}>
                            <summary><Typography variant="beta" tag="h3">{`#${step.position}. ${step.name}`}</Typography></summary>
                            <StepView stepInfo={step} />
                          </details>
                        );
                      })}
                    </Flex>
                  </Box>
                </Box>

              </Flex>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="tertiary" onClick={() => { onToggle(false) }} type="button">Cancel</Button>
              {/* <Button type="submit" loading={false}>Submit</Button> */}
            </Modal.Footer>
          </>
        </Form>
      </Modal.Content>
    </Modal.Root>
  );
};

export { ProcessDetailsForm };
export type { ProcessDetailsData };
