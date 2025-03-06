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

  const canRead = true;
  const canDelete = true;

  const headers = TABLE_HEADERS;
  const users: object[] = [
    {
      id: 1,
      firstname: 'user',
      lastname: 'test1',
      email: 'a@b.c',
    }
  ]

  const handleRowClick = (userId: number) => { alert(userId) }
  const handleDeleteClick = (userId: number) => { alert(userId) }

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
        <Table.Root rows={users} headers={headers}>
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
              {users.map((user) => (
                <Table.Row
                  key={user.id}
                  onClick={handleRowClick(user.id)}
                  cursor={canRead ? 'pointer' : 'default'}
                >
                  {canDelete ? <Table.CheckboxCell id={user.id} /> : null}
                  {headers.map(({ name, ...rest }) => {
                    return (
                      <Table.Cell key={name}>
                        <Typography textColor="neutral800">{user[name] || '-'}</Typography>
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
                              <IconButton tag={NavLink} to={user.id.toString()} label="Edit" variant="ghost" withTooltip={false}>
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
                              <IconButton onClick={handleDeleteClick(user.id)} label="Delete" variant="ghost" withTooltip={false}>
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

const TABLE_HEADERS: Array<object> = [
  {
    name: 'firstname',
    label: 'Firstname',
    sortable: true,
  },
  {
    name: 'lastname',
    label: 'Lastname',
    sortable: true,
  },
  {
    name: 'email',
    label: 'Email',
    sortable: true,
  },
];

export { HomePage };
