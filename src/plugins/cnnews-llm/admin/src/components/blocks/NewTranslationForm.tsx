import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Modal,
  Field,
  Typography,
  TextInput,
  Breadcrumbs,
  Crumb,
  SingleSelect,
  SingleSelectOption,
} from '@strapi/design-system';

import { Form, type FormHelpers } from '../ui/Form';
// import { InputRenderer } from '../ui/FormInputs/Renderer';
// import { FormLayoutInputProps } from '../../types/forms';
// import { useNotification } from '../../features/Notifications';

// import { StepView } from '../StepView';
// import { url } from 'inspector';

// type FormLayout = FormLayoutInputProps[][];

interface NewProcessData {
  url: string;
  process_uuid: string;
}

interface ProcessDetailsFormProps {
  headerTitle: string,
  onToggle: (newProcessData: NewProcessData | null) => void;
}

// const FORM_BASE_LAYOUT = [
//   [
//     {
//       label: 'URL',
//       name: 'url',
//       type: 'string' as const,
//       size: 12,
//     },
//   ],
//   // [
//   //   {
//   //     label: 'Process uuid',
//   //     name: 'process_uuid',
//   //     type: 'string' as const,
//   //     size: 12,
//   //   },
//   // ],
// ] satisfies FormLayout;

const NewTranslationForm = ({ headerTitle, onToggle }: ProcessDetailsFormProps) => {
  // const [formValues, setFormValues] = React.useState<NewProcessData>({ url: '', process_uuid: '' })

  const [formUrl, setFormUrl] = React.useState<string>('')
  const [formProc, setFormProc] = React.useState<string>('')

  const [processSelectOption, setProcessSelectOption] = React.useState<object[]>([])

  const fetchData = () => {
    const url = 'https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=10'
    const res = fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log('MODAL fetchData', json)
        return json
      });
    return res
  }

  const handleSubmit = async (body: NewProcessData, { setErrors }: FormHelpers<NewProcessData>) => {
    onToggle({ url: formUrl, process_uuid: formProc });
  };

  const handleInputChange = (e) => {
    setFormUrl(e.target.value)
  }

  const handleSelectChange = (selectedId: string) => {
    setFormProc(selectedId)
  }

  React.useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchData().then((data) => {
        const options: object[] = data.data.map((process) => {
          const { uuid, ...other } = process;
          return {
            id: uuid,
            ...other,
          };
        });
        setProcessSelectOption(prev => [...prev, ...options])
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Modal.Root defaultOpen onOpenChange={() => { onToggle(null) }}>
      <Modal.Content>
        <Modal.Header>
          <Breadcrumbs label={headerTitle}>
            <Crumb isCurrent>{headerTitle}</Crumb>
          </Breadcrumbs>
        </Modal.Header>
        <Form
          method="POST"
          initialValues={{}}
          onSubmit={handleSubmit}
        >
          <>
            <Modal.Body>
              <Flex direction="column" alignItems="stretch" gap={6}>
                <Box>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      <Grid.Root gap={5}>
                        <Grid.Item col={12} direction="column" alignItems="stretch">

                          <Field.Root name="url" required={true}>
                            <Field.Label>URL</Field.Label>
                            <TextInput required={true} onChange={handleInputChange} value={formUrl} />
                            <Field.Hint />
                            <Field.Error />
                          </Field.Root>

                        </Grid.Item>
                      </Grid.Root>
                    </Flex>
                  </Box>
                </Box>

                <Box>
                  <Box paddingTop={4}>
                    <Flex direction="column" alignItems="stretch" gap={1}>
                      <Grid.Root gap={5}>
                        <Grid.Item col={12} direction="column" alignItems="stretch">

                          <Field.Root name="process" required={true}>
                            <Field.Label>Process</Field.Label>
                            <SingleSelect required={true} onChange={handleSelectChange} value={formProc}>
                              {processSelectOption.map((process) => {
                                return (
                                  <SingleSelectOption key={process.id} value={process.id}>{process.name}</SingleSelectOption>
                                )
                              })}
                            </SingleSelect>
                            <Field.Hint />
                            <Field.Error />
                          </Field.Root>

                        </Grid.Item>
                      </Grid.Root>
                    </Flex>
                  </Box>
                </Box>

              </Flex>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="tertiary" onClick={() => { onToggle(null) }} type="button">Cancel</Button>
              <Button type="submit" loading={false}>Submit</Button>
            </Modal.Footer>
          </>
        </Form>
      </Modal.Content>
    </Modal.Root>
  );
};

export { NewTranslationForm };
export type { NewProcessData };
