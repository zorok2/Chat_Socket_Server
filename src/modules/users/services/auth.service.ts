import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UsersService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async generateToken(payload: any): Promise<string> {
    const privateKey = process.env.PRIVATE_KEY;
    return this.jwtService.sign(payload, { privateKey });
  }

  async validateUser(payload: any): Promise<Users> {
    // Validate if user exists in the database based on the payload received from the token
    return this.usersService.findOne(payload.sub);
  }

  async login(user: Users): Promise<{ accessToken: string }> {
    const payload = { sub: user.id, username: user.userName };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(user: Users): Promise<Users> {
    // Implement user registration logic here (e.g., save user to the database)
    // Ensure to hash the password before saving it to the database
    // return this.usersService.create(user);
    return null;
  }
}
