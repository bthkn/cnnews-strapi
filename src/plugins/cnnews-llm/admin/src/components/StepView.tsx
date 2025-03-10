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

import { Form, type FormHelpers } from './ui/Form';
import { InputRenderer } from './ui/FormInputs/Renderer';
import { FormLayoutInputProps } from '../types/forms';

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

const StepView = ({ stepInfo }: { stepInfo: ProcessStepDetailsData }) => {
  return (
      <Grid.Root gap={5}>
        {Object.entries(stepInfo).map(([fieldKey, fieldValue], idx) => {
          return (
            <Grid.Item
              key={idx}
              col={6}
              direction="column"
              alignItems="stretch"
            >
              <InputRenderer
                type="string"
                disabled={['uuid'].includes(fieldKey) ? true : false}
                label={fieldKey}
                value={fieldValue}
              />
            </Grid.Item>
          );
        })}
      </Grid.Root>
  );
}

export { StepView };