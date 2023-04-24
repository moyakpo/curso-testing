export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  pending = 'Pending',
  running = 'Running',
  completed = 'Completed',
}
