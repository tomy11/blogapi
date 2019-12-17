import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity()
export class PostTag {

    @Column()
    postId?: number;

    @Column()
    tagId?: number;
 
}