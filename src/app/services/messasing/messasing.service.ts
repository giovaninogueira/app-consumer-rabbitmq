import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MessasingService {
    
    @RabbitSubscribe({
        exchange: 'exchange_queue_1',
        routingKey: 'subscribe-route',
        queue: 'queue_1'
    })
    public async pubSubService(msg: {}) {
        console.log(`Received message: ${JSON.stringify(msg)}`);
    }

    @RabbitRPC({
        exchange: 'exchange_queue_1',
        routingKey: 'rpc-route',
        queue: 'queue_2'
    })
    public async rpcService(msg: {}) {
        Logger.log('AUI')
        return {
            'msg': 'Received message',
            'payload': msg
        }
    }
}
