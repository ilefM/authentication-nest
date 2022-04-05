import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    providers: [
        {
            provide: 'USER_SERVICE',
            useClass: UsersService,
        },
    ],
    exports: ['USER_SERVICE'],
})
export class UsersModule {}
