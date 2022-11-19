import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private userModel: typeof User) {}

	async findUser(email: string) {
		return await this.userModel.findOne({ where: { email: email } });
	}

	async createUser(email: string, password: string) {
		return await this.userModel.create({ email, password });
	}
}
