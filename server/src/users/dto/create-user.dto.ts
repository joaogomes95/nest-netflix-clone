//Data tranfer Object = Objeto de tranfência de dados;
import { IsString, Length } from "class-validator";
export class CreateUserDto{
    @IsString()
    @Length(2, 100)
    name: string;

    @IsString()    
    email: string;

    @IsString()
    @Length(6, 16)
    password: string;

    @IsString()
    @Length(6, 16)
    passwordConfirmation: string;
}