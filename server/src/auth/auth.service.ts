import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private db: PrismaService){}
    async login(login: LoginDto) {
        const { email, password } = login;

        const user = await this.db.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new NotFoundException ('Usuário não encotrado!');
        }

        const salt = 10;
        const hash = await bcrypt.hash(password, salt)

        if ( hash === password ) {
            return 'login confirmado';
        }else{
            return 'Falha ao logar';
        }
    }
    
}
