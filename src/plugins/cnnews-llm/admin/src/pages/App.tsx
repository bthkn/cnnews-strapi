// @ts-nocheck
import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from './HomePage';

import { RagPage } from './RagPage';
import { ProcsPage } from './ProcsPage';
import { AgentsPage } from './AgentsPage';
import { ModelsPage } from './ModelsPage';

const menuSections = [
  {
    id: 1,
    title: "Common",
    links: [
      {
        id: 0,
        label: "Переводы",
        to: "",
        hasNotification: false,
        icon: true,
      },
    ],
  },
  {
    id: 2,
    title: "System",
    links: [
      // {
      //   id: 1,
      //   label: "База Знаний",
      //   to: "rag",
      //   hasNotification: false,
      //   icon: false,
      // },
      {
        id: 2,
        label: "Процессы",
        to: "procs",
        hasNotification: false,
        icon: false,
      },
      {
        id: 3,
        label: "Агенты",
        to: "agents",
        hasNotification: false,
        icon: false,
      },
      {
        id: 4,
        label: "Модели",
        to: "models",
        hasNotification: false,
        icon: false,
      }
    ],
  },
];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout sections={menuSections} />}>
        {/* common */}
        <Route
          index
          element={<HomePage />}
        />
        {/* system */}
        <Route
          path="rag"
          element={<RagPage />}
        />
        <Route
          path="procs"
          element={<ProcsPage />}
        />
        <Route
          path="agents"
          element={<AgentsPage />}
        />
        <Route
          path="models"
          element={<ModelsPage />}
        />
      </Route>
      <Route path="*" element={<Page.Error />} />
    </Routes>
  );
};

export { App };
