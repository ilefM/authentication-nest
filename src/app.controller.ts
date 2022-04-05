import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { User } from './users/user';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getHello(@Request() req): string {
        return this.appService.getHello(req.user.name);
    }
}
