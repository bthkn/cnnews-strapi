import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Main, Flex, Typography, Status, IconButton, Dialog } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';

import { Page } from '../components/PageHelpers';
import { Layouts } from '../components/Layouts/Layout'
import { Table } from '../components/ui/Table';
import { TooltipProvider } from '../components/TooltipProvider';
import { getTranslation } from '../utils/getTranslation';


const HomePage = () => {
  const { formatMessage } = useIntl();

  const [data, setData] = React.useState<object[]>([]);

  const url = 'https://llm.cnnews.xplr.ru/v1/agent-profile/?page=1&page_size=10'

  React.useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json.data.map((agentData) => {
            const { uuid, llm_uuid, agent, name, ...other } = agentData;
            return {
              id: uuid,
              llmId: llm_uuid,
              agent: agent,
              name: name,
              config: {
                ...other,
              }
            }
          }));
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  const canRead = true;
  const canDelete = true;

  const headers = TABLE_HEADERS;
  // const users: object[] = [
  //   {
  //     id: 1,
  //     firstname: 'user',
  //     lastname: 'test1',
  //     email: 'a@b.c',
  //   }
  // ]

  const handleRowClick = (userId: number) => () => { alert(userId) }
  const handleDeleteClick = (userId: number) => () => { alert(userId) }

  return (
    <Page.Main>
      <Page.Title>{`Переводы | ${formatMessage({ id: getTranslation('plugin.name') })}`}</Page.Title>
      <Layouts.Header
        primaryAction={null}
        title='Переводы'
        subtitle='All the users who have access to the Strapi admin panel'
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
        <Table.Root rows={data} headers={headers}>
          <Table.ActionBar />
          <Table.Content>
            <Table.Head>
              {canDelete ? <Table.HeaderCheckboxCell /> : null}
              {headers.map((header) => (
                <Table.HeaderCell key={header.name} {...header} />
              ))}
            </Table.Head>
            <Table.Empty />
            <Table.Loading />
            <Table.Body>
              {data.map((agent) => (
                <Table.Row
                  key={agent.id}
                  onClick={handleRowClick(agent.id)}
                  cursor={canRead ? 'pointer' : 'default'}
                >
                  {canDelete ? <Table.CheckboxCell id={agent.id} /> : null}
                  {headers.map(({ name, ...rest }) => {
                    return (
                      <Table.Cell key={name}>
                        <Typography textColor="neutral800">{agent[name] || '-'}</Typography>
                      </Table.Cell>
                    );
                  })}
                  {canRead || canDelete ? (
                    <Table.Cell onClick={(e) => e.stopPropagation()}>
                      <Flex justifyContent="end">
                        {canRead ? (
                          // <IconButton tag={NavLink} to={user.id.toString()} label="Edit" variant="ghost" withTooltip={false}><Pencil /></IconButton>
                          <TooltipProvider
                            button={
                              <IconButton tag={NavLink} to={agent.id.toString()} label="Edit" variant="ghost" withTooltip={false}>
                                <Pencil />
                              </IconButton>
                            }
                            content="Edit"
                          />
                        ) : null}
                        {canDelete ? (
                          // <IconButton onClick={handleDeleteClick(user.id)} label="Delete" variant="ghost" withTooltip={false}><Trash /></IconButton>
                          <TooltipProvider
                            button={
                              <IconButton onClick={handleDeleteClick(agent.id)} label="Delete" variant="ghost" withTooltip={false}>
                                <Trash />
                              </IconButton>
                            }
                            content="Delete"
                          />
                        ) : null}
                      </Flex>
                    </Table.Cell>
                  ) : null}
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.Root>
        {/* <Pagination.Root {...pagination}>
          <Pagination.PageSize />
          <Pagination.Links />
        </Pagination.Root> */}
      </Layouts.Content>
      {/* {isModalOpened && <ModalForm onToggle={handleToggle} />}
      <Dialog.Root open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <ConfirmDialog onConfirm={confirmDelete} />
      </Dialog.Root> */}
    </Page.Main>
  );
};

// const TABLE_HEADERS: Array<object> = [
//   {
//     name: 'firstname',
//     label: 'Firstname',
//     sortable: true,
//   },
//   {
//     name: 'lastname',
//     label: 'Lastname',
//     sortable: true,
//   },
//   {
//     name: 'email',
//     label: 'Email',
//     sortable: true,
//   },
// ];

const TABLE_HEADERS: Array<object> = [
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

export { HomePage };
