import * as React from 'react';
import { Typography } from '@strapi/design-system';

import { Page } from '../components/PageHelpers';
import { Layouts } from '../components/Layouts/Layout'

import { BasicTableView, HeaderDefObj, TableConfig, TableItem } from '../components/blocks/BasicTableView';
import { ModelDetailsForm } from '../components/blocks/ModelDetailsForm'

const ModelProviders = {
  'bc1466ac-15f4-4515-80c5-037171260986': 'gitee.io Proxy',
  'ebd1d59a-5026-4c6d-8506-604497016fd1': 'Gitee AI 1',
  'abd1d59a-5026-4c6d-8506-604497016fd6': 'Gitee AI 2',
  'ae6447b9-6f30-4e09-869e-044c8771a941': 'Together AI',
}

const TABLE_HEADERS: Array<HeaderDefObj> = [
  {
    name: 'displayName',
    label: 'Model Name',
    sortable: true,
  },
  {
    name: 'modelProvider',
    label: 'Provider',
    sortable: true,
  },
  {
    name: 'useTools',
    label: 'Tools',
    sortable: false,
    cellFormatter({ useTools }: { useTools: boolean }) {
      return (
        <Typography textColor="neutral800">{useTools ? 'True' : 'False'}</Typography>
      );
    },
  },
];

const ModelsPage = () => {
  const [data, setData] = React.useState<TableItem[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<object>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isModalOpened, setModalOpened] = React.useState<boolean>(false);

  const tableConfig: TableConfig = {
    headerDefinition: TABLE_HEADERS,
    canRead: true,
    canDelete: false,
    needCheckbox: false,
  }

  const fetchData = () => {
    const url = 'https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=10'
    const res = fetch(url)
      .then(response => response.json())
      .then(json => json.data);
    return res
  }

  const handleRowClick = (itemId: number | string) => () => {
    console.log(itemId)
  }

  const handleEditClick = (itemId: number | string) => () => {
    console.log(itemId)
    const item = data.find((el) => el.id === itemId)
    if (!item) {
      return
    }
    setSelectedItem({ ...item });
    setModalOpened((prev) => !prev)
  }

  const handleDeleteClick = (itemId: number | string) => () => {
    console.log(itemId)
  }

  const handleToggle = (success: boolean) => {
    if (success) {
      setIsLoading(true);
      fetchData().then((data) => {
        setData(data.map((modelsData) => {
          const { uuid, display_name, llm_connection_uuid, use_tools, ...other } = modelsData;
          return {
            id: uuid,
            displayName: display_name,
            modelProvider: ModelProviders[llm_connection_uuid] ?? "UNKNOWN",
            llm_connection_uuid: llm_connection_uuid,
            useTools: use_tools,
            ...other,
          };
        }));
      });
      setIsLoading(false);
    }
    setModalOpened((prev) => !prev)
  }

  React.useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    if (!ignore) {
      fetchData().then((data) => {
        setData(data.map((modelsData) => {
          const { uuid, display_name, llm_connection_uuid, use_tools, ...other } = modelsData;
          return {
            id: uuid,
            displayName: display_name,
            modelProvider: ModelProviders[llm_connection_uuid] ?? "UNKNOWN",
            llm_connection_uuid: llm_connection_uuid,
            useTools: use_tools,
            ...other,
          };
        }));
      });
      setIsLoading(false);
    }
    return () => {
      ignore = true;
    };
  });

  return (
    <Page.Main>
      <Page.Title>Модели</Page.Title>
      <Layouts.Header
        primaryAction={null}
        title='Модели'
      />
      <Layouts.Content>
        <BasicTableView
          tableData={data}
          tableConfig={tableConfig}
          isLoading={isLoading}
          onRowClick={handleRowClick}
          onEditBtnClick={handleEditClick}
          onDeleteBtnClick={handleDeleteClick}
        />
      </Layouts.Content>

      {isModalOpened && <ModelDetailsForm
        headerTitle={selectedItem.displayName ?? ""}
        modelData={selectedItem}
        onToggle={(success) => { handleToggle(success) }}
      />}
      {/* <Dialog.Root open={() => { }} onOpenChange={() => { }}>
        <ConfirmDialog onConfirm={() => { }} />
      </Dialog.Root> */}

    </Page.Main>
  );
};

export { ModelsPage };
