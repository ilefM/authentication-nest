import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET',
        });
    }

    async validate(payload: any) {
        // We want to return the same payload format as auth.service

        // At this point the validation is already done
        // The JWT is is validated and the informations (payload) extracted
        // is enough to find the user
        return {
            id: payload.sub,
            name: payload.name,
        };
    }
}
