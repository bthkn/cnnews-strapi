// @ts-nocheck

export type StepStatus = "init" | "inProgress" | "success" | "error";

export interface TaskStep {
  name: string;
  status: StepStatus,
  meta: {
    reqData: object | null,
    resData: object | null,
  },
  time: number | null,
}

export interface Task {
  id: string;
  status: StepStatus;
  process_uuid: string;
  steps: Array<TaskStep>;
  timestamp: number;
  operationId: string | null,
  time: number | null,
  resultUrl: string | null,
  errorMessage?: string;
}
