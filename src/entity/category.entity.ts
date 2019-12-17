import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    categoryId?: number;

    @Column()
    parentId?: number;

    @Column({ length: 200 })
    categoryTitle?: string;

    @Column({ length: 200 })
    categoryMetaTitle?: string;

    @Column({ length: 200 })
    categorySlug?: string;

    @Column({ length: 200 })
    categoryContent?: string;
}