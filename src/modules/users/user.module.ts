/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { UsersService } from './services/user.service';
import { UsersRepository } from './repositories/user.repository';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { JWTService } from './services/jwtService';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY, // Change this to a secure secret key
      signOptions: { expiresIn: '24h' }, // Token expiration time
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [],
  providers: [UsersService, UsersRepository, JWTService, AuthService],
  exports: [UsersService, UsersRepository],
})
export class UserModule {}
