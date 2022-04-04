import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from 'src/users/users.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): User {
        return req.user;
    }
}
