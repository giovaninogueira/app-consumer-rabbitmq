import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RabbitMQ } from './config/rabbitmq';
import { MessasingService } from './app/services/messasing/messasing.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    RabbitMQModule.forRootAsync(RabbitMQModule, RabbitMQ),
  ],
  controllers: [],
  providers: [MessasingService],
})
export class AppModule {}
