import { IoAdapter } from '@nestjs/platform-socket.io';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { Logger } from '@nestjs/common';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { JWTService } from './modules/users/services/jwtService';
// config();

export class SocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = createServer();
    const io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
    return io;
  }
}
async function bootstrap() {
  new JWTService();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

Logger.log(`SERVER IS RUNNING ON ${process.env.DB_PORT}`);

Logger.debug(
  `user name ${process.env.DB_PASSWORD} ${typeof process.env.DB_PASSWORD}`,
);
bootstrap();
