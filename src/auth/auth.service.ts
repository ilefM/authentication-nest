import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: User) {
        const payload = { name: user.name, sub: user.userId };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
