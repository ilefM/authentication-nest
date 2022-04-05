import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(name: string): any {
        return { msg: `You got access to a protected route, ${name} ` };
    }
}
