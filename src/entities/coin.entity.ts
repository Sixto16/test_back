import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./payment.entity";

@Entity()
export class Coin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Payment, (payment) => payment.coin)
    payment: Payment
}