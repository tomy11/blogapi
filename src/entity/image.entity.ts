import { Entity, PrimaryGeneratedColumn, Column, Generated, CreateDateColumn } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 200 })
    imageName?: string;

    @Column({ length: 400 })
    imageUrl?: string;

    @Column({ length: 30 })
    imageCodeType?: string;

    @Column('int')
    useId?: number;

    @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP(6)" })
    createDate?: Date;
 
}