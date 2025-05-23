import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Max, Min, NotEquals } from "class-validator";
import { Status } from "src/tasks/entities/task.entity";

export class CreateTaskDto {

    @ApiProperty()
    id: number;
  
    @IsNotEmpty({ message: 'password should not be empty' })
    @ApiProperty()
    @NotEquals('string', { message: 'Please enter a title' }) 
    @Min(6)
    @Max(20)
    title: string;
   
    @IsNotEmpty({ message: 'password should not be empty' })
    @ApiProperty()
    @NotEquals('string', { message: 'Please enter a status' }) 
    @Min(6)
    @Max(20)
    status: Status;
}
