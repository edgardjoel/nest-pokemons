import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance;

  constructor(private readonly httpService: HttpService) {}
  async executeSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      console.log({ name, no });
    });

    console.log(data);

    return data.results;
  }
}
