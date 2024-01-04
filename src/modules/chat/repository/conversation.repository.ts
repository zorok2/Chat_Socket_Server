import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationRepository {
  constructor(
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
  ) {}
  async findAll() {
    return this.conversationRepository.find();
  }
  async findOne(id) {
    return this.conversationRepository.findOne({ where: { id: id } });
  }

  async create(conversation: Conversation): Promise<Conversation> {
    return this.conversationRepository.save(conversation);
  }

  async update(id: string, conversation: Conversation): Promise<Conversation> {
    await this.conversationRepository.update(id, conversation);
    return this.conversationRepository.findOne({ where: { id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.conversationRepository.delete(id);
  }
}
