import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    tagId?: number;

    @Column({ length: 300 })
    tagTitle?: string;

    @Column({ length: 300 })
    tagMetaTitle?: string;

    @Column({ length: 100 })
    tagSlug?: string;

    @Column('Text')
    tagContet?: string;
}