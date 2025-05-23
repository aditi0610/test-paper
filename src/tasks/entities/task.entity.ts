import { Column } from "typeorm";

export enum Status {
    PENDING = 'pending',
    IN_PROGRESS = 'in-progress',
    COMPLETED = 'completed',
}
export class Task {
    @Column()
    id: number; 

    @Column()
    title: string; 

    @Column()
    status:  Status;
  }