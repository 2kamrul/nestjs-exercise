import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('blogs')
export class BlogEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @ManyToOne(() => UserEntity, user => user.blogs)
  @JoinColumn()
  user : UserEntity[]
}