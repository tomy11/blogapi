import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity()
export class PostMeta {
    @PrimaryGeneratedColumn()
    postmetaId?: number;

    @Column('int')
    postId?: number;

    @Column({length: 300})
    postmetaKey?: string;

    @Column('text')
    postmetaContent?: string; 
 
}