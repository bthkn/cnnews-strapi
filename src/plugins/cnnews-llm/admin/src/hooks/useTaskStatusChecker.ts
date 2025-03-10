// @ts-nocheck

// import { useState, useEffect, useRef } from "react";

// const useTaskStatusChecker = (taskIds: string[]) => {
//   const [statuses, setStatuses] = useState<Record<string, string>>({});
//   const intervals = useRef<Record<string, NodeJS.Timeout>>({});

//   useEffect(() => {
//     taskIds.forEach((taskId) => {
//       if (intervals.current[taskId]) return; // Если интервал уже запущен, не создаем новый

//       const checkStatus = async () => {
//         try {
//           const response = await fetch(`https://api.example.com/tasks/${taskId}`);
//           const data = await response.json();
//           setStatuses((prev) => ({ ...prev, [taskId]: data.status }));

//           if (data.status === "completed") {
//             console.log(`Задача ${taskId} завершена, удаляем интервал`);
//             stopChecking(taskId);
//           }
//         } catch (error) {
//           console.error(`Ошибка при получении статуса задачи ${taskId}:`, error);
//         }
//       };

//       intervals.current[taskId] = setInterval(checkStatus, 2500);
//       checkStatus(); // Делаем первый запрос сразу
//     });

//     return () => {
//       // Очищаем все интервалы при размонтировании
//       Object.values(intervals.current).forEach(clearInterval);
//     };
//   }, [taskIds]); // Перезапускаем, если изменяется массив задач

//   const stopChecking = (taskId: string) => {
//     if (intervals.current[taskId]) {
//       clearInterval(intervals.current[taskId]);
//       delete intervals.current[taskId];
//       setStatuses((prev) => ({ ...prev, [taskId]: "stopped" })); // Помечаем как остановленный
//     }
//   };

//   return { statuses, stopChecking };
// };

import { useState, useEffect, useRef } from "react";

import { Task, StepStatus } from "../types/task"; // Импорт типов

import * as api from '../utils/api';

// const useTaskStatusChecker = (taskIds: string[]) => {
//   const [tasks, setTasks] = useState<Record<string, Task | null>>({});
//   const intervals = useRef<Record<string, NodeJS.Timeout>>({});

//   useEffect(() => {
//     taskIds.forEach((taskId) => {
//       if (intervals.current[taskId]) return; // Если интервал уже запущен, не создаем новый

//       const checkStatus = async () => {
//         try {
//           const response = await fetch(`https://api.example.com/tasks/${taskId}`);
//           const task: Task = await response.json();
//           setTasks((prev) => ({ ...prev, [taskId]: task }));

//           if (task.status === "success" || task.status === "error") {
//             console.log(`Задача ${taskId} завершена, удаляем интервал`);
//             stopChecking(taskId);
//           }
//         } catch (error) {
//           console.error(`Ошибка при получении статуса задачи ${taskId}:`, error);
//         }
//       };

//       intervals.current[taskId] = setInterval(checkStatus, 2500);
//       checkStatus(); // Делаем первый запрос сразу
//     });

//     return () => {
//       // Очищаем все интервалы при размонтировании
//       Object.values(intervals.current).forEach(clearInterval);
//     };
//   }, [taskIds]); // Перезапускаем, если изменяется массив задач

//   const stopChecking = (taskId: string) => {
//     if (intervals.current[taskId]) {
//       clearInterval(intervals.current[taskId]);
//       delete intervals.current[taskId];
//       setTasks((prev) => ({ ...prev, [taskId]: null })); // Удаляем из состояния
//     }
//   };

//   return { tasks, stopChecking };
// };

const useTaskStatusChecker = (tasksMap: Record<string, string | null>) => {
  const [taskStatuses, setTaskStatuses] = useState<Record<string, Task | null>>({});
  const intervals = useRef<Record<string, NodeJS.Timeout>>({});

  useEffect(() => {
    Object.entries(tasksMap).forEach(([taskId, operationId]) => {
      if (!operationId || intervals.current[taskId]) return; // Пропускаем, если нет operationId или уже запущено

      const checkStatus = async () => {
        try {
          const res = await api.operationById(operationId)
          if (res.error) { return }
          const data = res.response

          const { operation, info } = data

          setTaskStatuses((prev) => ({ ...prev, [taskId]: data }));
        } catch (error) {
          console.error(`Ошибка при проверке статуса задачи ${taskId}:`, error);
        }
      };

      intervals.current[taskId] = setInterval(checkStatus, 2500);
      checkStatus();
    });

    return () => {
      Object.values(intervals.current).forEach(clearInterval);
    };
  }, [tasksMap]);

  const stopChecking = (taskId: string) => {
    if (intervals.current[taskId]) {
      clearInterval(intervals.current[taskId]);
      delete intervals.current[taskId];
      setTaskStatuses((prev) => ({ ...prev, [taskId]: null }));
    }
  };

  return { taskStatuses, stopChecking };
};

export { useTaskStatusChecker };
