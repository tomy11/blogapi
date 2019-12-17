import { Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    commentId?: number;

    @Column('int')
    postId?: number;

    @Column('int')
    parentId?: number;

    @Column({ length: 180 })
    commentTitle?: string;

    @Column('int')
    commentPublished?: number;

    @Column({ type: 'timestamp' })
    commentCreateAtDate?: Date;

    @Column({ type: 'timestamp' })
    commentUpdateAtDate?: Date;

    @Column({ type: 'datetime' })
    commentPublishedAtDate?: Date;

    @Column({ length: 100 })
    commentContent?: string;

    @ManyToOne(type => Post, post => post.comments)
    post?: Post;
 
}