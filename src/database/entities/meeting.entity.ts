import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeEntity } from "./employee.entity";

@Entity('meetings')
export class MeetingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToOne(() => EmployeeEntity)
    @JoinColumn()
    employee: EmployeeEntity;
}