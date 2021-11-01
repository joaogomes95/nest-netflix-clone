import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Movie } from '@prisma/client';


@Injectable()
export class MoviesService {
    constructor(private db: PrismaService){}

    async create(data: Prisma.MovieCreateInput): Promise<Movie>{
        const movie = await this.db.movie.create({ data });
        return movie;
    }

    
}
