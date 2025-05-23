// import { Injectable } from '@nestjs/common';

import { Body, Injectable, Param, Put } from "@nestjs/common";

@Injectable()
export class AppService {
  getUser(): string {
    return 'Hello World!';
  }

// @Injectable()
// export class TodoService {
//   todos = [];

//   create(todo: any) {
//     this.todos.push(todo);
//   }

  // findAll() {
  //   return this.todos;
  // }

 // What’s the mistake here?
  // @Put('todos/:id')
  // updateUser(@Param('id') id: number, @Body() updateDto: UpdateUserDto) {
  //   console.log(typeof id);
  // }
  
}


