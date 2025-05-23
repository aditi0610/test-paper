************ TEST : 23 MAY 2025 ************* ADITI PARIHAR **************

Answer1: A progressive Node.js framework for building efficient, scalable          server-side applications using TypeScript and  CLI tools


Answer2:  Services are injected using the constructor.
          Managed by the module system. software design pattern where a class receives its dependencies from an external source rather than creating them itself.
          NestJS handles it using decorators like @Injectable().


Answer3:  @Injectable() is used to declare a class as a service or provider.
           @Controller() is used to define a controller that handles HTTP requests


Answer4:   DTO is a TypeScript class used to define the shape of data sent or received for example : POST or PUT requests. It helps with validation(IsNotEmpty, IsInt etc) and typing.


Answer5:   pipe: Pipes are used to transform input data or validate it. we can use built-in pipes like ValidationPipe or create custom pipes.Custom pipes are created in a separate file, and then used in main.ts or inside controllers/services.


Answer6:  @Param() – Gets data from URL path ex: /user/:id
          @Query() – Gets data from URL query string ex: /products?page=1&limit=10
          @Body() – Gets data from request body : used in POST/PUT


Answer7:  GET requests should not have a body. 
when i run : "message": "Cannot GET /",
             "error": "Not Found",
             "statusCode": 404

Right way is: @Get('user')
              getUser(@Query('name') name: string) {
              return `Hello ${name}`;
          }
and we can also use @Param().



Answer8:  it must be accessed using this.todos. this keyword is missing. 
Right way is:  @Injectable()
                    export class TodoService {
                      todos = [];

                      create(todo: any) {
                        this.todos.push(todo);
                      }

                      findAll() {
                        return  this.todos;
                      }
                    }



Answer9: This is http request and url of every request,
yes it will work on every route, only if we add this globally.



Answer10:  updateTodo(@Param('id') id: string, @Body() updateDto: UpdateTodoDto) {
  const todoId = Number(id);  // convert string to number
  console.log(typeof todoId); // prints "number"
}
& mistake is that @Param() always returns string.



Answer11:  Modules: Root module. they combine controller and s  
           Controllers: Handle incoming requests and return responses. create endpoints.
           Providers (Services): contain the business logic of the application.defined using the @Injectable() decorator




Answer12: * nest generate resource tasks [using cli]
          OR 
          nest g module tasks
          nest g service tasks
          nest g controller tasks

         * @Entity() decorator used
         * for validation: first install class-validator
         :- npm install class-validator class-transformer
         * In dto: ApiProperty for swagger UI, IsNotEmpty,NotEquals,Min,Max etc validations.
         * swagger setup for ui. 




 Answer13: TypeORM is Object-Relational Mapping (ORM) library for TypeScript & JavaScript. It allows developers to interact with databases 
 1. install typeorm: npm install @nestjs/typeorm typeorm pg
 2. Use TypeOrmModule.forRoot()[In app module with type,host,port,username,password,database,entity etc] and TypeOrmModule.forFeature()[in module]
 3. Entities: Classes that map to database tables.
 4. Repositories: Provide methods to interact with the database like: find, save, delete etc.
 5. Relations: Define relationships between entities like: OneToMany, ManyToOne.




Answer14: JWT Auth Implementation: Use @nestjs/jwt and PassportModule.
          1: nest g guard auth (create guard)
          2: import CanActive,ExecutionContext
          3. get the http request
          4: and check the request is valid
          5: private validate request
          6: check if the user is authenticated
          7. Create AuthGuard using Passport strategies.
          8.  Strategies for JWT, local, Google, etc.
          9. Custom logic for protecting routes, used with @UseGuards(JwtAuthGuard)
          10. ApiBearer@ApiBearerAuth() and so on.......



*********************Thank You ***************************

     




