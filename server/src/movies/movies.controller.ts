import { Controller, Body, Post, Get, Param, Delete, UnprocessableEntityException } from '@nestjs/common';
import { Movie } from '@prisma/client'
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Get('/find')
    findAll(){
        return this.service.findAll();
    }
  
    @Get('find/:id')
    findOne(@Param('id') id: string): Promise<Movie>{
        return this.service.findOne(id);
    }

  @Post('create')
  createMovie(@Body() data: CreateMovieDto): Promise<Movie> {
    return this.service.create(data);
  }

  @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<Movie> {
      return this.service.delete(id);
    }

}