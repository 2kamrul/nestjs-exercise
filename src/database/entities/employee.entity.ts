import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'employees'})
export class EmployeeEntity {
    @PrimaryGeneratedColumn("increment" )
    id: number

    @Column({unique: true})
    username: string

    @Column()
    full_name: string
}