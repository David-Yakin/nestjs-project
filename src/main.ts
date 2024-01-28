import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue, red } from 'chalk';
import { config } from 'dotenv';
config();

const PORT = process.env.SERVER_PORT || 3000;

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {
      console.log(blue(`Listening on: http//:localhost:${PORT}`));
    });
  } catch (error) {
    console.log(red(error.message));
  }
}
bootstrap();
