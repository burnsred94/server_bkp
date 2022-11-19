import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
	providers: [UserService],
	imports: [SequelizeModule.forFeature([User])],
	exports: [SequelizeModule, UserService],
})
export class UserModule {}
