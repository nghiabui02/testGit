import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {roomClass} from "./roomClass";

@Entity()
export class StudentPro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    age: number;
    @Column({type:'varchar', length: 255})
    score:  string;
    @ManyToOne(()=> roomClass,(roomClass)=>roomClass.id)
    roomClass: roomClass
}
