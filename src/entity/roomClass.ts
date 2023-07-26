import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class roomClass {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type:'varchar', length:255})
    headMaster: string;
    @Column({type:'int'})
    studentAmount: number;
}
