import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RabbitMQ } from './config/rabbitmq';
import { MessasingService } from './app/services/messasing/messasing.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { MySql } from './config/mysql';
import { LogRequestService } from './app/services/log-request/log-request.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RabbitMQModule.forRootAsync(RabbitMQModule, RabbitMQ),
    SequelizeModule.forRootAsync(MySql)
  ],
  controllers: [],
  providers: [MessasingService, LogRequestService],
})
export class AppModule {}
