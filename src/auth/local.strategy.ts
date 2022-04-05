import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super();

        // If we want to login with the email we do the following
        // super({
        //     usernameField: 'email',
        // });
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
