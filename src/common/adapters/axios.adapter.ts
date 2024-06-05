import { HttpService } from '@nestjs/axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  constructor(private readonly httpService: HttpService) {}

  private axios = this.httpService.axiosRef;
  async get<T>(url: string, options?: any): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url, options);

      return data;
    } catch (error) {
      throw new Error('This is an error - check server logs');
    }
  }
}
