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
import { useNotification } from '../../features/Notifications';

import { Task, TaskStep, StepStatus } from '../../types/task'

interface TranslationDetailsProps {
  taskData: Task,
  onToggle: (success: boolean) => void;
}

const TranslationDetailsModal = ({ taskData, onToggle }: TranslationDetailsProps) => {
  const [formValues, setFormValues] = React.useState<Task>({ ...taskData })
  const { toggleNotification } = useNotification();

  const updateModel = async (data: Task) => {
    // const payload = {
    //   name: data.name,
    //   display_name: data.displayName,
    //   use_tools: data.useTools,
    //   max_temperature: data.max_temperature,
    //   llm_connection_uuid: data.llm_connection_uuid,
    // }
    // const res = await fetch(`https://llm.cnnews.xplr.ru/v1/llm/${data.id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // })
    // return await res.json()
  }

  return (
    <Modal.Root defaultOpen onOpenChange={() => { onToggle(true) }}>
      <Modal.Content>
        <Modal.Header>
          <Breadcrumbs label={taskData.id}>
            <Crumb isCurrent>{taskData.id}</Crumb>
          </Breadcrumbs>
        </Modal.Header>

        <Modal.Body>
          <Flex direction="column" alignItems="stretch" gap={6}>

            <Box>
              <Box paddingTop={4}>
                <Flex direction="column" alignItems="stretch" gap={1}>
                  <Grid.Root gap={5}>

                    <Grid.Item
                      col={12}
                      direction="column"
                      alignItems="stretch"
                    >
                      <Flex direction="column" alignItems="stretch" gap={1}>
                        <Typography variant="beta" tag="h2">ID</Typography>
                        <Typography variant="beta" tag="h2">{taskData.id}</Typography>
                      </Flex>
                    </Grid.Item>

                  </Grid.Root>
                </Flex>
              </Box>
            </Box>

          </Flex>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="tertiary" onClick={onToggle(false)} type="button">Cancel</Button>
          <Button type="submit" loading={false}>Submit</Button>
        </Modal.Footer>

      </Modal.Content>
    </Modal.Root>
  );
};

export { TranslationDetailsModal };
export type { TranslationDetailsProps };
