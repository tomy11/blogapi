import { Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    uId?: number;

    @Column()
    @Generated("uuid")
    ugId?: string;

    @Column({ length: 100 })
    userName?: string;

    @Column({ length: 700 })
    passWord?: string;

    @OneToMany(type => Profile, p => p.profile)
    profiles: Profile[];
 
}