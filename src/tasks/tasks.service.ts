import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { CreateTaskDTO, UpdateTaskDTO } from './DTO/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      description: 'Primera tarea de la lista del curso',
      id: '1',
      status: TaskStatus.pending,
      title: 'Primer tarea',
    },
  ];

  getTasks() {
    return this.tasks;
  }
  createTask(title: string, description: string) {
    const task: Task = {
      description,
      title,
      status: TaskStatus.pending,
      id: v4(),
    };
    this.tasks.push(task);
    return task;
  }
  deleteTask(taskId: string) {
    const task = this.tasks.find((t) => t.id == taskId);
    this.tasks = this.tasks.filter((t) => t.id != taskId);
    return task;
  }
  updateTask(id: string, updateTaskData: UpdateTaskDTO) {
    let task = this.tasks.find((t) => t.id == id);
    task = {
      ...task,
      ...updateTaskData,
    };
    this.tasks = this.tasks.map((t) => (t.id == id ? task : t));
    return task;
  }
}
