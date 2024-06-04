import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./country.entity";
import { State } from "./state.entity";
import { Coin } from "./coin.entity";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    // @Column()
    // description: string;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @ManyToOne(() => Country, (country) => country.payment)
    country: Country

    @ManyToOne(() => State, (state) => state.payment)
    state: State

    @ManyToOne(() => Coin, (coin) => coin.payment)
    coin: Coin
}