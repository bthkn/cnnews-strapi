import * as React from 'react';
import { Typography } from '@strapi/design-system';

import { Page } from '../components/PageHelpers';
import { Layouts } from '../components/Layouts/Layout';

import { BasicTableView, HeaderDefObj, TableConfig, TableItem } from '../components/blocks/BasicTableView';
import { AgentDetailsForm } from '../components/blocks/AgentDetailsForm'

const TABLE_HEADERS: Array<HeaderDefObj> = [
  {
    name: 'agent',
    label: 'Agent',
    sortable: false,
  },
  {
    name: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    name: 'llmId',
    label: 'Model ID',
    sortable: false,
  },
];

const AgentsPage = () => {
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
    const url = 'https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=10'
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
        setData(data.map((agentData) => {
          const { uuid, llm_uuid, agent, name, ...other } = agentData;
          return {
            id: uuid,
            llmId: llm_uuid,
            agent: agent,
            name: name,
            config: {
              ...other,
            }
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
          const { uuid, llm_uuid, agent, name, ...other } = agentData;
          return {
            id: uuid,
            llmId: llm_uuid,
            agent: agent,
            name: name,
            config: {
              ...other,
            }
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
      <Page.Title>Агенты</Page.Title>
      <Layouts.Header
        primaryAction={null}
        title='Агенты'
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

      {isModalOpened && <AgentDetailsForm
        headerTitle={selectedItem.displayName ?? ""}
        modelData={selectedItem}
        onToggle={(success) => { handleToggle(success) }}
      />}

    </Page.Main>
  );
};

export { AgentsPage };
