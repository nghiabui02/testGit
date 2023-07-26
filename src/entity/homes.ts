import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Homes {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    price: number;
    @Column({type: 'text'})
    description: string;
}
