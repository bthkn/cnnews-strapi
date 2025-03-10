import * as React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { Main, Button, Flex, Typography, Status, IconButton, Dialog } from '@strapi/design-system';
import { Pencil, Trash, Plus } from '@strapi/icons';

import { Page } from '../components/PageHelpers';
import { Layouts } from '../components/Layouts/Layout'
import { Table } from '../components/ui/Table';
import { TooltipProvider } from '../components/TooltipProvider';
import { getTranslation } from '../utils/getTranslation';
import { useTaskStatusChecker } from '../hooks/useTaskStatusChecker';

import { saveLocalStorage, readLocalStorage } from '../utils/ls';
import { StepCircles } from '../components/ui/StepCircles'

import { TranslationsTableView, HeaderDefObj, TableConfig, TableItem } from '../components/blocks/TranslationsTableView';
import { NewTranslationForm, NewProcessData } from "../components/blocks/NewTranslationForm";
import { TranslationDetailsModal } from '../components/blocks/TranslationDetailsModal';

import { StepStatus, TaskStep, Task } from '../types/task';

import * as api from '../utils/api';
import { StatusBadge } from '../components/ui/StatusBadge';

const TABLE_HEADERS: Array<HeaderDefObj> = [
  {
    name: 'id',
    label: 'ID',
    sortable: false,
  },
  {
    name: 'steps',
    label: 'Steps',
    sortable: false,
    cellFormatter({ steps }: { steps: TaskStep[] }) {
      return (
        <StepCircles steps={steps} />
      );
    },
  },
  {
    name: 'status',
    label: 'Status',
    sortable: false,
    cellFormatter({ status }: { status: StepStatus }) {
      return (
        <StatusBadge status={status} />
      );
    },
  },
  {
    name: 'timestamp',
    label: 'Date',
    sortable: true,
    cellFormatter({ timestamp }: { timestamp: number }) {
      return (
        <Typography textColor="neutral800">{format(timestamp, 'MMM d, yyyy HH:mm')}</Typography>
      );
    },
  },
];

const HomePage = () => {
  const [data, setData] = React.useState<Task[]>([]);
  const [selectedItem, setSelectedItem] = React.useState<Task>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isModalOpened, setModalOpened] = React.useState<boolean>(false);
  const [isDetailsModalOpened, setDetailsModalOpened] = React.useState<boolean>(false);

  // const [updateStarted, setUpdateStarted] = React.useState(false);

  const [tasksUpdateMap, setTasksUpdateMap] = React.useState<Record<string, string | null>>({});
  const { taskStatuses, stopChecking } = useTaskStatusChecker(tasksUpdateMap);

  const tableConfig: TableConfig = {
    headerDefinition: TABLE_HEADERS,
    canRead: true,
    canView: true,
    needCheckbox: false,
  }

  const fetchData = () => {
    const url = 'https://llm.cnnews.xplr.ru/v1/llm/pagination?page=1&page_size=10'
    const res = fetch(url)
      .then(response => response.json())
      .then(json => json.data);
    return res
  }

  const handleRowClick = (itemId: number | string) => () => {
    console.log(itemId)
  }

  const handleDetailsToggle = () => {
    setDetailsModalOpened((prev) => !prev)
  }

  const handleDetailsClick = (itemId: string) => () => {
    console.log(itemId)
    const item = data.find((el) => el.id === itemId)
    if (!item) {
      return
    }
    console.log(item)
    setSelectedItem({ ...item });
    setDetailsModalOpened((prev) => !prev)
  }

  const handleToggle = async (newProcessData: NewProcessData | null) => {
    setModalOpened((prev) => !prev)

    if (!newProcessData) {
      return
    }

    const newTask: Task = {
      id: crypto.randomUUID().toString(),
      status: "inProgress",
      process_uuid: newProcessData.process_uuid,
      steps: [
        {
          name: "Scrapping",
          status: "inProgress",
          meta: { reqData: { url: newProcessData.url }, resData: null },
          time: null
        },
        { name: "Parsing", status: "init", meta: { reqData: null, resData: null }, time: null },
        { name: "Translation", status: "init", meta: { reqData: null, resData: null }, time: null },
      ],
      timestamp: Date.now(),
      operationId: null,
      time: null,
      resultUrl: null
    };

    setData([...data, newTask]);

    saveLocalStorage('_tsk', [...data, newTask]);

    await processTask(newTask);
  }

  const updateData = async (taskId: string, operationData: object) => {
    const taskToUpdate = data.find(t => t.id === taskId)
    if (!taskToUpdate) { return }

    const { operation, info } = operationData;
    const [step1, step2, step3] = info

    const isExpectedStatus = (
      operation.status === "OK"
      && operation.status === "UNPROCESSED"
      && operation.status === "IN_PROCESS")

    if (operation.status.startsWith("Error") || (!isExpectedStatus)) {
      taskToUpdate.steps[2].status = "error"
      taskToUpdate.status = "error"
    }

    if (operation.status === "UNPROCESSED" || operation.status === "IN_PROCESS") {
      taskToUpdate.steps[2].status = "inProgress"
      taskToUpdate.status = "inProgress"
    }

    if (operation.status === "OK") {
      taskToUpdate.time = operation.time
      taskToUpdate.resultUrl = operation.result_url
      taskToUpdate.steps[2].status = "success"
      taskToUpdate.status = "success"
    }

    saveLocalStorage("_tsk", [...data])
    setData([...data])
  }

  const processTask = async (task: Task) => {
    const [step1, step2, step3] = task.steps

    // STEP 1 - SCRAP

    const res1 = await api.fetchPageToS3(step1.meta.reqData?.url)
    if (res1.error) {
      step1.status = "error"
      task.status = "error"
      saveLocalStorage("_tsk", [...data, task])
      setData([...data, task])
      return
    }
    step1.meta.resData = res1.response
    step1.status = "success"
    step2.status = "inProgress"
    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])

    // STEP 2 - PARSE

    step2.meta.reqData = res1.response.file.url
    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])

    const res2 = await api.parseURL(res1.response.file.url)
    step2.meta.resData = res2.response
    if (res2.error) {
      step2.status = "error"
      task.status = "error"
      saveLocalStorage("_tsk", [...data, task])
      setData([...data, task])
      return
    }
    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])
    step2.status = "success"
    step3.status = "inProgress"
    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])

    // STEP 3 - TRANSLATE

    step3.meta.reqData = {
      url: res2.response.json_url,
      process_uuid: task.process_uuid,
    }

    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])

    const res3 = await api.startProcess(res2.response.json_url, task.process_uuid)
    step3.meta.resData = res3.response
    if (res3.error) {
      step3.status = "error"
      task.status = "error"
      saveLocalStorage("_tsk", [...data, task])
      setData([...data, task])
      return
    }
    task.operationId = res3.response.operation_uuid
    saveLocalStorage("_tsk", [...data, task])
    setData([...data, task])

    console.log('processTask', task)

    // setTasksUpdateMap((prev) => ({ ...prev, [task.id]: res3.response.operation_uuid }));
  }

  React.useEffect(() => {
    const restoredData: Task[] = readLocalStorage('_tsk');
    setData(restoredData)
    // setUpdateStarted(true);
  }, []);

  // React.useEffect(() => {
  //   if (!updateStarted) return;

  //   const intervals = data
  //     .filter(task => task.status === 'inProgress' && task.operationId !== null)
  //     .map(task => {
  //       console.log(task)
  //       return setInterval(async () => await updateData(task.id, task.operationId), 2500)
  //     })
  //   console.log(intervals)

  //   return () => {
  //     intervals.map(interval => clearInterval(interval))
  //   };
  // }, [updateStarted]);

  React.useEffect(() => {
    data
      .filter(task => task.status === 'inProgress' && task.operationId !== null)
      .map(task => {
        setTasksUpdateMap((prev) => ({ ...prev, [task.id]: task.operationId }));
      })
  }, [data]);

  React.useEffect(() => {
    Object.entries(taskStatuses).forEach(([taskId, task]) => {
      if (!task) return;
      console.log(`Статус задачи ${taskId} обновлен:`, task.operation.status);
      if (task.operation.status === "OK" || task.operation.status === "ERROR") {
        console.log(`Задача ${taskId} завершена, удаляем интервал`);
        stopChecking(taskId);
      }
      updateData(taskId, task);
    });
  }, [taskStatuses]);

  return (
    <Page.Main>
      <Page.Title>Переводы</Page.Title>

      <Layouts.Header
        primaryAction={null}
        title='Переводы'
      // subtitle='All the users who have access to the Strapi admin panel'
      />

      <Layouts.Action
        startActions={
          <Button type="primary" onClick={() => setModalOpened((prev) => !prev)} startIcon={<Plus />}>Перевод</Button>
        }
      />

      <Layouts.Content>
        <TranslationsTableView
          tableData={data}
          tableConfig={tableConfig}
          onRowClick={handleRowClick}
          onDetailsBtnClick={handleDetailsClick}
          isLoading={isLoading}
        />
      </Layouts.Content>

      {isModalOpened && <NewTranslationForm
        headerTitle="Новый Перевод"
        onToggle={(newProcessData) => { handleToggle(newProcessData) }}
      />}

      {isDetailsModalOpened && <TranslationDetailsModal taskData={selectedItem} onToggle={handleDetailsToggle} />}
    </Page.Main>
  );
};

export { HomePage };
