import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MeetingEntity } from "./meeting.entity";

@Entity({ name: 'employees' })
export class EmployeeEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    full_name: string;
}