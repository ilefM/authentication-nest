import { Controller, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/users/user';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        // TODO: DTO
        return this.authService.login(req.user);
    }
}
