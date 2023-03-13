import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('BLOGS')
export class BlogEntity{
  @PrimaryGeneratedColumn('increment')
  ID: number;

  @Column()
  TITLE: string;

  @Column()
  DESC: string;

  @ManyToOne(() => UserEntity, user => user.BLOGS)
  @JoinColumn()
  USER : UserEntity[]
}