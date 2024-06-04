import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coin } from 'src/entities/coin.entity';
import { Country } from 'src/entities/country.entity';
import { Payment } from 'src/entities/payment.entity';
import { State } from 'src/entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payment)
        private repository: Repository<Payment>,

        @InjectRepository(Country)
        private countryRepository: Repository<Country>,

        @InjectRepository(State)
        private stateRepository: Repository<State>,

        @InjectRepository(Coin)
        private coinRepository: Repository<Coin>
    ){}

    async createPayment(data: any): Promise<any> {
        const country = await this.countryRepository.findOneBy({id: data.country});
        const coin = await this.countryRepository.findOneBy({id: data.coin});
        const state = await this.countryRepository.findOneBy({id: 1});

        const body = {
            value: data.value,
            country,
            state,
            coin
        }


        const obj = this.repository.create(body);
        const response = await this.repository.save(obj);
        
        return response;
    };

    async getPayments(): Promise<any> {
        const response = await this.repository.find({
            relations: ['state', 'country', 'coin']
        });
        
        return response;
    };

    async getCountries(): Promise<any> {
        const response = await this.countryRepository.find();
        
        return response;
    };

    async getCoins(): Promise<any> {
        const response = await this.coinRepository.find();
        
        return response;
    };

    async getStates(): Promise<any> {
        const response = await this.stateRepository.find();
        
        return response;
    };

    async deletePayment(id: number): Promise<any> {
        const payment = await this.repository.findOneBy({ id: id});

        if (!payment) {
            throw new HttpException('Pago no existe', HttpStatus.BAD_REQUEST);
        }

        console.log('asdasd', payment)
        const response = await this.repository.delete(payment);

        return response;
    };
}
