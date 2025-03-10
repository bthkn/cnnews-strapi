// @ts-nocheck
import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';

const RagPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to Rag Page</h1>
    </Main>
  );
};

export { RagPage };
