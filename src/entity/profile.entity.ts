import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity()
export class Profile {
    
    @PrimaryGeneratedColumn()
    pId?: number;

    @ManyToOne(type => User, u => u.userName)
    user: User;

    @Column({ length: 100 })
    firstName?: string;

    @Column({ length: 100 })
    middleName?: string;

    @Column({ length: 100 })
    lastName?: string;

    @Column({ length: 10 })
    mobile?: string;

    @Column({ length: 500 })
    passWordHash?: string;

    @Column()
    registerAt?: Date;

    @Column()
    lastLogin?: Date;

    @ManyToOne(type => Profile, pf => pf.profile)
    profile?: User;

    @OneToMany(type => Post, post => post.user)
    posts: Post[];
}