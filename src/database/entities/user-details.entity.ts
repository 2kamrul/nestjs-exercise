import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'user_details'})
export class UserDetailsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToOne(() => UserEntity, user => user.userDetails)
  @JoinColumn()
  user: UserEntity
}