import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class blog {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    title: string;
    @Column({type:"varchar", length:255})
    content: string;
    @Column({type: 'text'})
    owner: string;
}
