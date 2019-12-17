import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity()
export class PostCategory {
    @Column()
    postId?: number;

    @Column()
    categoryId?: number;
 
}