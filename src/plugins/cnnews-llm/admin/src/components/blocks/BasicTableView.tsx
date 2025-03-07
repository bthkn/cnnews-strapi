import { Flex, Typography, IconButton } from '@strapi/design-system';
import { Pencil, Trash } from '@strapi/icons';

import { Table } from '../../components/ui/Table';
import { TooltipProvider } from '../../components/TooltipProvider';

interface TableItem extends Object {
  id: number | string;
  [key: string]: any;
}

interface HeaderDefObj {
  name: string;
  label: string;
  sortable: boolean;
  cellFormatter?: any;
}

interface TableConfig {
  headerDefinition: Array<HeaderDefObj>;
  canRead: boolean;
  canDelete: boolean;
  needCheckbox: boolean;
}

const BasicTableView = ({
  tableData,
  tableConfig,
  onRowClick,
  onEditBtnClick,
  onDeleteBtnClick,
  isLoading = false,
}: {
  tableData: Array<TableItem>,
  tableConfig: TableConfig,
  onRowClick: any,
  onEditBtnClick: any
  onDeleteBtnClick: any,
  isLoading: boolean,
}) => {
  return (
    <Table.Root rows={tableData} headers={tableConfig.headerDefinition} isLoading={isLoading}>
      <Table.ActionBar />
      <Table.Content>
        <Table.Head>
          {(tableConfig.canDelete && tableConfig.needCheckbox) ? <Table.HeaderCheckboxCell /> : null}
          {tableConfig.headerDefinition.map((header) => (
            <Table.HeaderCell key={header.name} {...header} />
          ))}
        </Table.Head>
        <Table.Empty />
        <Table.Loading />
        <Table.Body>
          {tableData.map((item) => (
            <Table.Row
              key={item.id}
              onClick={onRowClick(item.id)}
              cursor={tableConfig.canRead ? 'pointer' : 'default'}
            >
              {(tableConfig.canDelete && tableConfig.needCheckbox) ? <Table.CheckboxCell id={item.id} /> : null}
              {tableConfig.headerDefinition.map(({ cellFormatter, name, ...rest }) => {
                return (
                  <Table.Cell key={name}>
                    {typeof cellFormatter === 'function' ? (
                      cellFormatter(item, { name, ...rest })
                    ) : (
                      <Typography textColor="neutral800">{item[name] || '-'}</Typography>
                    )}
                  </Table.Cell>
                );
              })}
              {tableConfig.canRead || tableConfig.canDelete ? (
                <Table.Cell onClick={(e: Event) => e.stopPropagation()}>
                  <Flex justifyContent="end">
                    {tableConfig.canRead ? (
                      <TooltipProvider
                        button={
                          <IconButton onClick={onEditBtnClick(item.id)} label="Edit" variant="ghost" withTooltip={false}>
                            <Pencil />
                          </IconButton>
                        }
                        content="Edit"
                      />
                    ) : null}
                    {tableConfig.canDelete ? (
                      <TooltipProvider
                        button={
                          <IconButton onClick={onDeleteBtnClick(item.id)} label="Delete" variant="ghost" withTooltip={false}>
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
  );
};

export { BasicTableView };
export type { TableItem, HeaderDefObj, TableConfig };
