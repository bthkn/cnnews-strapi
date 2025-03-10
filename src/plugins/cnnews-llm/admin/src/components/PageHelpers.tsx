// @ts-nocheck
import * as React from 'react';

import {
  Box,
  EmptyStateLayout,
  type EmptyStateLayoutProps,
  Flex,
  Loader,
  Main,
  MainProps,
} from '@strapi/design-system';
import { WarningCircle } from '@strapi/icons';
import { EmptyPermissions, EmptyDocuments } from '@strapi/icons/symbols';
import { useIntl } from 'react-intl';

/* -------------------------------------------------------------------------------------------------
 * Main
 * -----------------------------------------------------------------------------------------------*/
interface PageMainProps extends MainProps {
  children: React.ReactNode;
}

const PageMain = ({ children, ...restProps }: PageMainProps) => {
  return <Main {...restProps}>{children}</Main>;
};

/* -------------------------------------------------------------------------------------------------
 * Loading
 * -----------------------------------------------------------------------------------------------*/
interface LoadingProps {
  /**
   * @default 'Loading content.'
   */
  children?: React.ReactNode;
}

/**
 * @public
 * @description A loading component that should be rendered as the page
 * whilst you load the content for the aforementioned page.
 */
const Loading = ({ children = 'Loading content.' }: LoadingProps) => {
  return (
    <PageMain height="100vh" aria-busy={true}>
      <Flex alignItems="center" height="100%" justifyContent="center">
        <Loader>{children}</Loader>
      </Flex>
    </PageMain>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Error
 * -----------------------------------------------------------------------------------------------*/
interface ErrorProps extends Partial<EmptyStateLayoutProps> {}

/**
 * TODO: should we start passing our errors here so they're persisted on the screen?
 * This could follow something similar to how the global app error works...?
 */

/**
 * @public
 * @description An error component that should be rendered as the page
 * when an error occurs.
 */
const Error = (props: ErrorProps) => {
  const { formatMessage } = useIntl();

  return (
    <PageMain height="100%">
      <Flex alignItems="center" height="100%" justifyContent="center">
        <EmptyStateLayout
          icon={<WarningCircle width="16rem" />}
          content={formatMessage({
            id: 'anErrorOccurred',
            defaultMessage: 'Whoops! Something went wrong. Please, try again.',
          })}
          {...props}
        />
      </Flex>
    </PageMain>
  );
};

/* -------------------------------------------------------------------------------------------------
 * NoPermissions
 * -----------------------------------------------------------------------------------------------*/
interface NoPermissionsProps extends Partial<EmptyStateLayoutProps> {}

/**
 * @public
 * @description A component that should be rendered as the page
 * when the user does not have the permissions to access the content.
 * This component does not check any permissions, it's up to you to decide
 * when it should be rendered.
 */
const NoPermissions = (props: NoPermissionsProps) => {
  const { formatMessage } = useIntl();

  return (
    <PageMain height="100%">
      <Flex alignItems="center" height="100%" justifyContent="center">
        <Box minWidth="50%">
          <EmptyStateLayout
            icon={<EmptyPermissions width="16rem" />}
            content={formatMessage({
              id: 'app.components.EmptyStateLayout.content-permissions',
              defaultMessage: "You don't have the permissions to access that content",
            })}
            {...props}
          />
        </Box>
      </Flex>
    </PageMain>
  );
};

/* -------------------------------------------------------------------------------------------------
 * NoData
 * -----------------------------------------------------------------------------------------------*/
interface NoDataProps extends Partial<EmptyStateLayoutProps> {}

/**
 * @public
 * @description A component that should be rendered as the page
 * when there is no data available to display.
 * This component does not check any permissions, it's up to you to decide
 * when it should be rendered.
 */
const NoData = (props: NoDataProps) => {
  const { formatMessage } = useIntl();

  return (
    <PageMain height="100%" background="neutral100">
      <Flex alignItems="center" height="100%" width="100%" justifyContent="center">
        <Box minWidth="50%">
          <EmptyStateLayout
            icon={<EmptyDocuments width="16rem" />}
            action={props.action}
            content={formatMessage({
              id: 'app.components.EmptyStateLayout.content-document',
              defaultMessage: 'No content found',
            })}
            {...props}
          />
        </Box>
      </Flex>
    </PageMain>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
export interface TitleProps {
  children: string;
}

/**
 * @public
 * @description This component takes the children (must be a string) and sets
 * it as the title of the html.
 */
const Title = ({ children: title }: TitleProps) => {
  React.useEffect(() => {
    document.title = `${title} | Strapi`;
  }, [title]);

  return null;
};

const Page = {
  Error,
  Loading,
  NoPermissions,
  NoData,
  Main: PageMain,
  Title,
};

export { Page };
export type { ErrorProps, LoadingProps, NoPermissionsProps, PageMainProps as MainProps };
