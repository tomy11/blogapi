import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany } from "typeorm";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    postId?: number;

    @Column('int')
    blogId?: number;

    @Column('int')
    userId?: number;

    @OneToMany(type => Profile, pf  => pf.pId)
    user: Profile[];

    @Column({ length: 180 })
    title?: string;

    @Column({ length: 180 })
    metaTitle?: string;

    @Column({ length: 60 })
    slug?: string;

    @Column({ length: 180 })
    summary?: string;

    @Column('int')
    published?: number;

    @Column({ type: 'timestamp' , default: () => "CURRENT_TIMESTAMP"})
    createAtDate?: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updateAtDate?: Date;

    @Column({ type: 'datetime' })
    publishedAtDate?: Date;

    @Column({ length: 400 })
    content?: string;

    @OneToMany(type => Comment, com => com.post)
    comments?: Comment[];
 
}