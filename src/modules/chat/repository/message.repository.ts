import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from 'src/entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectRepository(Messages)
    private readonly MessagesRepository: Repository<Messages>,
  ) {}
  async findAll(): Promise<Messages[]> {
    return this.MessagesRepository.find();
  }

  async findOne(id: string): Promise<Messages> {
    return this.MessagesRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async create(user: Messages): Promise<Messages> {
    return this.MessagesRepository.save(user);
  }

  async update(id: string, user: Messages): Promise<Messages> {
    await this.MessagesRepository.update(id, user);
    return this.MessagesRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.MessagesRepository.delete(id);
  }
}
