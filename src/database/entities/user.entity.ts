import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MeetingEntity } from "./meeting.entity";
import { UserDetailsEntity } from "./user-details.entity";
import { BlogEntity } from "./blog.entity";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    full_name: string;

    @OneToOne(() => UserDetailsEntity, userDetails => userDetails.user)
    userDetails: UserDetailsEntity

    @OneToMany(() => BlogEntity, blog => blog.user)
    blogs: BlogEntity
}