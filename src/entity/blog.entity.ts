import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Blog {

    @PrimaryGeneratedColumn()
    bid?: number;

    @Column({ length: 200 })
    blogName?: string;

    @Column({ length: 200 })
    blogTitle?: string;

    post?: Post[];
 
}