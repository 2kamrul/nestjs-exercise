import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDetailsEntity } from "./user-details.entity";
import { BlogEntity } from "./blog.entity";

@Entity({ name: 'USERS' })
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
    ID: number;

    @Column({ unique: true })
    USERNAME: string;

    @Column()
    FULL_NAME: string;

    @OneToOne(() => UserDetailsEntity, userDetails => userDetails.USER)
    USER_DETAILS: UserDetailsEntity

    @OneToMany(() => BlogEntity, blog => blog.USER)
    BLOGS: BlogEntity
}