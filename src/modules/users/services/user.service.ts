import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../chat/dto/CreateUserDto.dto';
import { Users } from 'src/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
  async findOne(id): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const user = new Users();
    user.userName = createUserDto.username;
    user.password = createUserDto.password;
    user.displayName = createUserDto.displayName;
    return this.usersRepository.save(user);
  }
}
