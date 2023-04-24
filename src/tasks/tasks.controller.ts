import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, UpdateTaskDTO } from './DTO/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    return this.taskService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') taskId: string) {
    return this.taskService.deleteTask(taskId);
  }

  @Patch(':id')
  updateTask(
    @Param('id') taskId: string,
    @Body() updatedDataTask: UpdateTaskDTO,
  ) {
    return this.taskService.updateTask(taskId, updatedDataTask);
  }
}
