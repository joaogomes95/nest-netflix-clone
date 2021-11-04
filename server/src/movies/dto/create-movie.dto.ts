import { IsString, Length, IsEmail, IsNotEmpty } from "class-validator";


export class CreateMovieDto{

    @IsString()
    name: string;

    year: Date;
    length: Date;
    storyline: string;
    image: string;
}