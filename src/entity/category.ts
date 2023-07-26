import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductPro} from "./product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @OneToMany(() => ProductPro, Category => Category.name)
    productPro: ProductPro;
}
