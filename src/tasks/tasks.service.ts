import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = []; // Explicitly define the type of tasks as Task[]

  
  // create method    
  create(task: Task): Task {
    this.tasks.push(task);
    return task; // Return the created task
  }

  //find all task method
  findAll(): Task[] {
    return this.tasks;
  }

  //find one task
  findOne(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id); // Find the task with the given id
  }


  //update task
  update(id: number, updatedTask: Partial<Task>): Task | undefined {
    const task = this.findOne(id); // Find the task with the given id
    // Update the task if found
    if (task) {
      Object.assign(task, updatedTask);
    }
    return task; // Return the updated task
  }

  //delete task
  remove(id: number): { message: string } {
    this.tasks = this.tasks.filter(t => t.id !== id); // Remove the task with the given id
    return { message: 'Task deleted' }; // Return a success message
  }
}