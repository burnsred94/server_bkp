import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from 'src/modules/user/user.model';

export const getSequelizeConfig = async (
  configService: ConfigService,
): Promise<SequelizeModuleOptions> => ({
  dialect: 'mysql',
  host: configService.get('DATABASE_HOST'),
  port: Number(configService.get('DATABASE_PORT')) || 3306,
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  models: [User],
  autoLoadModels: true,
  synchronize: true,
});
