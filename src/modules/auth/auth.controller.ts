import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly userSrvice: UserService) {}

	@Post('signup')
	async signUp(@Body() dto: AuthDto) {
		const oldUser = await this.userSrvice.findUser(dto.email);
		if (oldUser) {
			throw new BadRequestException();
		}
		return this.userSrvice.createUser(dto.email, dto.password);
	}
}
