import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { getConfigJWT } from 'src/configs/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
	providers: [AuthService],
	controllers: [AuthController],
	imports: [
		ConfigModule,
		UserModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getConfigJWT,
		}),
		PassportModule,
	],
})
export class AuthModule {}
