import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Importação correta do dotenv
import * as dotenv from 'dotenv';
import { join } from 'path';

// Garante que o dotenv carregue corretamente
dotenv.config({ path: join(__dirname, '..', '.env') });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
