// @ts-nocheck
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

type FormLayout = FormLayoutInputProps[][];

interface ModelDetailsData {
  id: string;
  displayName: string;
  modelProvider: string;
  llm_connection_uuid: string;
  useTools: boolean;
  name: string;
  max_temperature: number;
}

interface ModelDetailsFormProps {
  headerTitle: string,
  modelData: ModelDetailsData,
  onToggle: (success: boolean) => void;
}

const FORM_LAYOUT = [
  [
    {
      label: 'ID',
      name: 'id',
      type: 'string' as const,
      size: 6,
      disabled: true,
    },
    {
      label: 'Model Provider',
      name: 'modelProvider',
      type: 'string' as const,
      size: 6,
      disabled: true,
    },
  ],
  [
    {
      label: 'Display Name',
      name: 'displayName',
      type: 'string' as const,
      size: 6,
    },
    {
      label: 'Use Tools',
      name: 'useTools',
      type: 'boolean' as const,
      size: 6,
    },
  ],
  [
    {
      label: 'Name',
      name: 'name',
      type: 'string' as const,
      size: 6,
    },
    {
      label: 'Max Temperature',
      name: 'max_temperature',
      type: 'float' as const,
      size: 6,
    },
  ],
] satisfies FormLayout;

const ModelDetailsForm = ({ headerTitle, modelData, onToggle }: ModelDetailsFormProps) => {
  const [formValues, setFormValues] = React.useState<ModelDetailsData>({ ...modelData })
  const { toggleNotification } = useNotification();

  const updateModel = async (data: ModelDetailsData) => {
    const payload = {
      name: data.name,
      display_name: data.displayName,
      use_tools: data.useTools,
      max_temperature: data.max_temperature,
      llm_connection_uuid: data.llm_connection_uuid,
    }
    const res = await fetch(`https://llm.cnnews.xplr.ru/v1/llm/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return await res.json()
  }

  const initialValues: ModelDetailsData = formValues;

  const handleSubmit = async (body: ModelDetailsData, { setErrors }: FormHelpers<ModelDetailsData>) => {
    console.log(body)
    const res = await updateModel(body);
    console.log(res)
    toggleNotification({
      type: 'success',
      message: JSON.stringify(res),
    });
    onToggle(true);
  };

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
          initialValues={initialValues ?? {}}
          onSubmit={handleSubmit}
        >
          <>
            <Modal.Body>
              <Flex direction="column" alignItems="stretch" gap={6}>

                <Box>
                  <Typography variant="beta" tag="h2">Model details</Typography>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      <Grid.Root gap={5}>
                        {FORM_LAYOUT.map((row) => {
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
                                // value={initialValues[field.name] ?? null}
                                />
                              </Grid.Item>
                            );
                          });
                        })}
                      </Grid.Root>
                    </Flex>
                  </Box>
                </Box>

                {/* <Box>
                  <Typography variant="beta" tag="h2">User's role</Typography>
                  <Box paddingTop={4}>
                    <Grid.Root gap={5}>
                      <Grid.Item col={6} xs={12} direction="column" alignItems="stretch">
                        <p>test</p>
                      </Grid.Item>
                    </Grid.Root>
                  </Box>
                </Box> */}

              </Flex>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="tertiary" onClick={() => { onToggle(false) }} type="button">Cancel</Button>
              <Button type="submit" loading={false}>Submit</Button>
            </Modal.Footer>
          </>

        </Form>
      </Modal.Content>
    </Modal.Root>
  );
};

export { ModelDetailsForm };
export type { ModelDetailsData };
