import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            name: 'john',
            username: 'johnuser',
            password: 'changeme',
        },
        {
            userId: 2,
            name: 'maria',
            username: 'mariauser',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
