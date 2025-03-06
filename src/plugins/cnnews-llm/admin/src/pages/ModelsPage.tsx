import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';

const ModelsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to Models Page</h1>
    </Main>
  );
};

export { ModelsPage };
