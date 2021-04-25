import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { LogRequest } from 'src/app/models/log-request';
import { LogRequestService } from '../log-request/log-request.service';

@Injectable()
export class MessasingService {

    constructor(@Inject(LogRequestService) private logService: LogRequestService) { }

    @RabbitSubscribe({
        exchange: 'exchange_queue_1',
        routingKey: 'subscribe-route',
        queue: 'queue_1'
    })
    public async pubSubService(obgReq: {id}) {
        let logRequest = await LogRequest.findOne({
            where: {
                id: obgReq.id
            }
        });
        return await this.logService.updateTime(logRequest);
    }

    @RabbitRPC({
        exchange: 'exchange_queue_1',
        routingKey: 'rpc-route',
        queue: 'queue_2'
    })
    public async rpcService(obgReq: {id}) {
        let logRequest = await LogRequest.findOne({
            where: {
                id: obgReq.id
            }
        });
        return await this.logService.updateTime(logRequest);
    }
}
