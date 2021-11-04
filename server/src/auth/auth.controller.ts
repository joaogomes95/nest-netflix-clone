import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) {}

    @Post('Login')
    login(@Body() data: LoginDto): Promise<string>{
        return this.service.login(data);
    }
}
