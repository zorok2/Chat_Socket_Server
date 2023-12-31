import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(user: Users): Promise<Users> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: Users): Promise<Users> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
