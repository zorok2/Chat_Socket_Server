import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
Logger.debug(`SERVER IS RUNNING ${process.env.DB_PORT}`);

Logger.debug(
  `user name ${process.env.DB_PASSWORD} ${typeof process.env.DB_PASSWORD}`,
);
bootstrap();
