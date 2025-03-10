import * as React from 'react';
import { Typography } from '@strapi/design-system';

import { Page } from '../components/PageHelpers';
import { Layouts } from '../components/Layouts/Layout';

import { BasicTableView, HeaderDefObj, TableConfig, TableItem } from '../components/blocks/BasicTableView';
import { ProcessDetailsForm } from '../components/blocks/ProcessDetailsForm'

const TABLE_HEADERS: Array<HeaderDefObj> = [
  {
    name: 'name',
    label: 'Name',
    sortable: false,
  },
  {
    name: 'description',
    label: 'Description',
    sortable: false,
  },
];

const ProcsPage = () => {
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
    const url = 'https://llm.cnnews.xplr.ru/v1/process/?page=1&page_size=10'
    const res = fetch(url)
      .then(response => response.json())
      .then(json => json.data);
    return res
  }

  // const fetchProcessSteps = (processId: string) => {
  //   const url = `https://llm.cnnews.xplr.ru/v1/process-step/process/${processId}`
  //   const res = fetch(url)
  //     .then(response => response.json())
  //     .then(json => json.data);
  //   return res
  // }

  // "steps": [
  //   {
  //     "name": "Перевод",
  //     "description": null,
  //     "process_uuid": "9cba91d3-f36f-4e93-98b4-f43e69610015",
  //     "position": 0,
  //     "agent_profile_uuid": "02b1b94a-e921-4931-be20-9c5e33da07ed",
  //     "retry_limit": 5,
  //     "temperature": 1,
  //     "segmentation": true,
  //     "timeout": null,
  //     "uuid": "75d4b004-33c0-4b25-8fee-32e6fdeb1103"
  //   },
  // ]

  const handleRowClick = (itemId: number | string) => () => {
    const item = data.find((el) => el.id === itemId)
    if (!item) {
      return
    }
    console.log(item)
  }

  const handleEditClick = (itemId: number | string) => () => {
    console.log(itemId)
    const item = data.find((el) => el.id === itemId)
    if (!item) {
      return
    }
    setSelectedItem(item);
    setModalOpened((prev) => !prev)
  }

  const handleDeleteClick = (itemId: number | string) => () => {
    console.log(itemId)
  }

  const handleToggle = (success: boolean) => {
    if (success) {
      setIsLoading(true);
      fetchData().then((data) => {
        setData(data.map((process) => {
          const { uuid, ...other } = process;
          return {
            id: uuid,
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
        setData(data.map((agentData) => {
          const { uuid, ...other } = agentData;
          return {
            id: uuid,
            ...other,
          };
        }));
      });
      setIsLoading(false);
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Page.Main>
      <Page.Title>Процессы</Page.Title>
      <Layouts.Header
        primaryAction={null}
        title='Процессы'
      />
      {/* <Layouts.Action
        startActions={
          <>
            <SearchInput label="Search"/>
            <Filters.Root options={FILTERS}>
              <Filters.Trigger />
              <Filters.Popover />
              <Filters.List />
            </Filters.Root>
          </>
        }
      /> */}
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

      {isModalOpened && <ProcessDetailsForm
        headerTitle={selectedItem.name ?? ""}
        modelData={selectedItem}
        onToggle={(success) => { handleToggle(success) }}
      />}

    </Page.Main>
  );
};

export { ProcsPage };
