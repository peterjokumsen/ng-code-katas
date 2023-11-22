export type TaskStatus = 'open' | 'in progress' | 'done';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
