import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LogRequest } from './logRequest';

@Module({
    imports: [SequelizeModule.forFeature([LogRequest])],
    exports: [SequelizeModule]
})
export class LogRequestModule {}