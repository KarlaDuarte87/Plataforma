import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Que os jogos comecem e a sorte esteja sempre a seu favor';
  }
}
