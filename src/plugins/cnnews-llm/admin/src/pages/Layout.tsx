import {
  NavLink,
  Outlet,
  useMatch,
  useLocation,
} from 'react-router-dom';
import { styled } from 'styled-components';
import {
  SubNav,
  SubNavHeader,
  SubNavLink,
  SubNavSection,
  SubNavSections,
} from '@strapi/design-system';
import { Lightning } from '@strapi/icons';

import { Layouts } from '../components/Layouts/Layout';
import { Page } from '../components/PageHelpers';

import { PLUGIN_ID } from '../pluginId';

const CustomIcon = styled(Lightning)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({ theme }) => theme.colors.warning500};
  }
`;

const Link = styled(SubNavLink)`
  &.active ${CustomIcon} {
    right: 13px;
  }
`;

interface SidepanelNavItem {
  id: number;
  label: string;
  to: string;
  hasNotification: boolean;
  icon: boolean;
}

interface SidepanelNavSections {
  id: number;
  title: string;
  links: SidepanelNavItem[];
}

interface SidepanelNavProps {
  menu: object[];
}

const SidepanelNav = ({ sections }: { sections: SidepanelNavSections[] }) => {
  const { pathname } = useLocation();

  if (!sections) {
    return (
      <SubNav>
        <SubNavHeader />
      </SubNav>
    );
  };

  return (
    <SubNav>
      <SubNavHeader />
      <SubNavSections>
        {sections.map((section) => (
          <SubNavSection key={section.id} label={section.title}>
            {section.links.map((link) => {
              return (
                <Link
                  tag={NavLink}
                  withBullet={link.hasNotification}
                  to={link.to}
                  onClick={() => { }}
                  key={link.id}
                  position="relative"
                >
                  {link.label}
                  {link?.icon && <CustomIcon width="1.5rem" height="1.5rem" />}
                </Link>
              );
            })}
          </SubNavSection>
        ))}
      </SubNavSections>
    </SubNav>
  );
};

const Layout = ({ sections }: { sections: SidepanelNavSections[] }) => {
  const match = useMatch(`/${PLUGIN_ID}/:tabId/*`);

  // if (isLoading) {
  //   return <Page.Loading />;
  // }

  // if (!match?.params.tabId) {
  //   return <Navigate to="application-infos" />;
  // }

  return (
    <Layouts.Root sideNav={<SidepanelNav sections={sections} />}>
      <Page.Title>LLM</Page.Title>
      <Outlet />
    </Layouts.Root>
  );
};

export { Layout, SidepanelNav };
export type { SidepanelNavProps, SidepanelNavItem, SidepanelNavSections };
