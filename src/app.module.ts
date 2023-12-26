import { ChatModule } from './modules/chat/chat.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import configs from 'ormconfig';
import { Users } from './entities/users.entity';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    ChatModule,
    TypeOrmModule.forRoot({
      // Cấu hình kết nối
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Users],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
