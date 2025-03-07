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

interface AgentDetailsData {
  id: string;
  llmId: string;
  agent: string;
  name: string;
  config: {
    responsibilities: string;
    skills: string;
    personality: string;
    goals: string;
    tasks: string;
    language: string;
    tone: string;
    style: string;
    instructions: string;
    keep_comments: true,
  }
}

interface AgentDetailsFormProps {
  headerTitle: string,
  modelData: AgentDetailsData,
  onToggle: (success: boolean) => void;
}

const FORM_BASE_LAYOUT = [
  // id: string;
  // llmId: string;
  [
    {
      label: 'ID',
      name: 'id',
      type: 'string' as const,
      size: 6,
      disabled: true,
    },
    {
      label: 'Model',
      name: 'llmId',
      type: 'string' as const,
      size: 6,
      disabled: true,
    },
  ],
  // agent: string;
  // name: string;
  [
    {
      label: 'Agent',
      name: 'agent',
      type: 'string' as const,
      size: 6,
    },
    {
      label: 'Name',
      name: 'name',
      type: 'string' as const,
      size: 6,
    },
  ],
] satisfies FormLayout;

const FORM_CONFIG_LAYOUT = [
  // responsibilities: string;
  // keep_comments: true,
  [
    {
      label: 'Responsibilities',
      name: 'config.responsibilities',
      type: 'string' as const,
      size: 8,
    },
    {
      label: 'Keep Comments',
      name: 'config.keep_comments',
      type: 'boolean' as const,
      size: 4,
    },
  ],
  // skills: string;
  [
    {
      label: 'Skills',
      name: 'config.skills',
      type: 'text' as const,
      size: 12,
    },
  ],
  // personality: string;
  [
    {
      label: 'Personality',
      name: 'config.personality',
      type: 'text' as const,
      size: 12,
    },
  ],
  // goals: string;
  [
    {
      label: 'Goals',
      name: 'config.goals',
      type: 'text' as const,
      size: 12,
    },
  ],
  // tasks: string;
  [
    {
      label: 'Tasks',
      name: 'config.tasks',
      type: 'text' as const,
      size: 12,
    },
  ],
  // language: string;
  [
    {
      label: 'Language',
      name: 'config.language',
      type: 'string' as const,
      size: 12,
    },
  ],
  // tone: string;
  [
    {
      label: 'Tone',
      name: 'config.tone',
      type: 'string' as const,
      size: 12,
    },
  ],
  // style: string;
  [
    {
      label: 'Style',
      name: 'config.style',
      type: 'string' as const,
      size: 12,
    },
  ],
  // instructions: string;
  [
    {
      label: 'Instructions',
      name: 'config.instructions',
      type: 'text' as const,
      size: 12,
    },
  ],
] satisfies FormLayout;

const AgentDetailsForm = ({ headerTitle, modelData, onToggle }: AgentDetailsFormProps) => {
  const [formValues, setFormValues] = React.useState<AgentDetailsData>({ ...modelData })
  const { toggleNotification } = useNotification();

  const updateAgent = async (data: AgentDetailsData) => {
    const payload = {
      "llm_uuid": data.llmId,
      "agent": data.agent,
      "name": data.name,
      "responsibilities": data.config.responsibilities,
      "skills": data.config.skills,
      "personality": data.config.personality,
      "goals": data.config.goals,
      "tasks": data.config.tasks,
      "language": data.config.language,
      "tone": data.config.tone,
      "style": data.config.style,
      "instructions": data.config.instructions,
      "keep_comments": data.config.keep_comments,
    }
    const res = await fetch(`https://llm.cnnews.xplr.ru/v1/agent-profile/${data.id}` , {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    return await res.json()
  }

  const initialValues: AgentDetailsData = formValues;

  const handleSubmit = async (body: AgentDetailsData, { setErrors }: FormHelpers<AgentDetailsData>) => {
    console.log(body)
    const res = await updateAgent(body);
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
                  <Typography variant="beta" tag="h2">Agent details</Typography>
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
                  <Typography variant="beta" tag="h2">Agent configuration</Typography>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      <Grid.Root gap={5}>
                        {FORM_CONFIG_LAYOUT.map((row) => {
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

export { AgentDetailsForm };
export type { AgentDetailsData };
