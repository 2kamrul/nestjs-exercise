import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'USER_DETAILS'})
export class UserDetailsEntity {
  @PrimaryGeneratedColumn('increment')
  ID: number;

  @Column()
  ADDRESS: string;

  @Column()
  EMAIL: string;

  @Column()
  PHONE: string;

  @OneToOne(() => UserEntity, user => user.USER_DETAILS)
  @JoinColumn()
  USER: UserEntity
}