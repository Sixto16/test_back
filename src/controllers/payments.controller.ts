import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PaymentsService } from 'src/services/payments.service';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Get()
    async getPayemnts(): Promise<any> {
        return await this.paymentsService.getPayments();
    }

    @Get('countries')
    async getCountries(): Promise<any> {
        return await this.paymentsService.getCountries();
    }

    @Get('coins')
    async getCoins(): Promise<any> {
        return await this.paymentsService.getCoins();
    }

    @Get('states')
    async getStates(): Promise<any> {
        return await this.paymentsService.getStates();
    }

    @Post()
    async createPayemnt(@Body() data: any): Promise<any> {
        return await this.paymentsService.createPayment(data);
    }

    @Delete(':id')
    async deletePayemnt(@Param('id') id: string): Promise<any> {
        return await this.paymentsService.deletePayment(Number(id));
    }
}
