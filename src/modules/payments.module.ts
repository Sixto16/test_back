import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from 'src/controllers/payments.controller';
import { Coin } from 'src/entities/coin.entity';
import { Country } from 'src/entities/country.entity';
import { Payment } from 'src/entities/payment.entity';
import { State } from 'src/entities/state.entity';
import { PaymentsService } from 'src/services/payments.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Payment, Country, State, Coin])
    ],
    controllers: [PaymentsController],
    providers: [PaymentsService]
})
export class PaymentsModule {}
