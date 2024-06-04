import { Module } from '@nestjs/common';
import { PaymentsModule } from './modules/payments.module';
import { DatabaseModule } from './modules/database.module';


@Module({
  imports: [PaymentsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
