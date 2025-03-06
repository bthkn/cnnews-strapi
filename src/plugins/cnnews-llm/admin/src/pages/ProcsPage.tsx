import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';

const ProcsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to Procs Page</h1>
    </Main>
  );
};

export { ProcsPage };
