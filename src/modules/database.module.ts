import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '12345',
      database: 'test',
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}