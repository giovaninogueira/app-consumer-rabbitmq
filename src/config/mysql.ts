import { ConfigModule, ConfigService } from "@nestjs/config"
import { SequelizeModuleAsyncOptions } from "@nestjs/sequelize";
import { LogRequest } from "src/app/models/logRequest";
import { LogRequestModule } from "src/app/models/logRequest.module";

export const MySql: SequelizeModuleAsyncOptions = {
    imports: [ConfigModule, LogRequestModule],
    useFactory: (configService: ConfigService) => ({
      dialect: 'mysql',
      host: configService.get('MYSQL_HOST'),
      port: +configService.get('MYSQL_PORT'),
      username: configService.get('MYSQL_USERNAME'),
      password: configService.get('MYSQL_PASSWORD'),
      database: configService.get('MYSQL_DATABASE'),
      models: [LogRequest],
    }),
    inject: [ConfigService],
  };