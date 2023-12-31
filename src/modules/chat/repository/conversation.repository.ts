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

  async create(conversation: Conversation): Promise<Conversation> {
    return this.conversationRepository.save(conversation);
  }

  async update(id: number, conversation: Conversation): Promise<Conversation> {
    await this.conversationRepository.update(id, conversation);
    return this.conversationRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.conversationRepository.delete(id);
  }
}
