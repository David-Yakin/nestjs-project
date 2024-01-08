import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue } from 'chalk';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(blue(`Listening on: http//:localhost:${PORT}`));
  });
}
bootstrap();
