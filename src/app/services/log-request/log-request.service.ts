import { Injectable } from '@nestjs/common';
import { LogRequest } from 'src/app/models/log-request';

@Injectable()
export class LogRequestService {

    constructor () {}
    
    /**
     * Update Time of log request
     * @param logRequest 
     * @returns Promise<LogRequest>
     */
    async updateTime(logRequest: LogRequest): Promise<LogRequest> {
        return await logRequest.save();
    }
}
