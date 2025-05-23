import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Create a new task
  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  // Get all tasks
  @Get('getAll/tasks')
  findAll() {
    return this.tasksService.findAll();
  }

  //  Get task by id
  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }


  // Update a task
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }


  // Delete a task
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
