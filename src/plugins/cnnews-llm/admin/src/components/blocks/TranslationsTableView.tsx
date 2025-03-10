// @ts-nocheck
import { Flex, Typography, IconButton, LinkButton } from '@strapi/design-system';
import { Pencil, ExternalLink, Eye } from '@strapi/icons';

import { Table } from '../../components/ui/Table';
import { TooltipProvider } from '../../components/TooltipProvider';

import { Task } from '../../types/task';
import { Box } from '@strapi/design-system';

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
  canView: boolean;
  needCheckbox: boolean;
}

const TranslationsTableView = ({
  tableData,
  tableConfig,
  onRowClick,
  onDetailsBtnClick,
  isLoading = false,
}: {
  tableData: Array<Task>,
  tableConfig: TableConfig,
  onRowClick: any,
  onDetailsBtnClick: any,
  isLoading: boolean,
}) => {
  const makePreviewURL = (rawUrl: string) => {
    const baseUrl = 'https://preview.cnnews.xplr.ru?id='
    const fakeId = rawUrl.slice('http://172.22.22.22:9000/files/'.length).split('.')[0].replaceAll('_', '-')
    return `${baseUrl}${fakeId}`
  }

  return (
    <Table.Root rows={tableData} headers={tableConfig.headerDefinition} isLoading={isLoading}>
      <Table.ActionBar />
      <Table.Content>
        <Table.Head>
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
              {tableConfig.headerDefinition.map(({ name, cellFormatter, ...rest }) => {
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
              {tableConfig.canRead ? (
                <Table.Cell onClick={(e: Event) => e.stopPropagation()}>
                  <Flex justifyContent="end" gap={2}>
                    {/* {tableConfig.canView && (
                      <TooltipProvider
                        button={
                          <IconButton onClick={onDetailsBtnClick(item.id)} label="View Details" variant="ghost" withTooltip={false}>
                            <Eye />
                          </IconButton>
                        }
                        content="View Details"
                      />
                    )} */}
                    {item.errorMessage && (
                      <Box>
                        <Typography textColor="danger600">{item.errorMessage}</Typography>
                      </Box>
                    )}
                    {item.status === "success" && (
                      <LinkButton
                        isExternal={true}
                        startIcon={<ExternalLink fill="neutral0"/>}
                        href={makePreviewURL(item.resultUrl)}
                      >
                        <Typography>Открыть</Typography>
                      </LinkButton>
                    )}
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

export { TranslationsTableView };
export type { TableItem, HeaderDefObj, TableConfig };
