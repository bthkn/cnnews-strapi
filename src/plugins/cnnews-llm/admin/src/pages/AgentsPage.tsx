import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { getTranslation } from '../utils/getTranslation';

const AgentsPage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Agents Page</h1>
    </Main>
  );
};

export { AgentsPage };
