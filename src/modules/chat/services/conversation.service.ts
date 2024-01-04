import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from 'src/entities/conversation.entity';
import { Repository } from 'typeorm';
import { ConversationRepository } from '../repository/conversation.repository';
import { CreateConversationDto } from '../dto/CreateConversationDto.dto';

@Injectable()
export class ConversationService {
  constructor(private readonly conversationRepo: ConversationRepository) {}

  async findAll(): Promise<Conversation[]> {
    return this.conversationRepo.findAll();
  }

  async create(
    createConversationDto: CreateConversationDto,
  ): Promise<Conversation> {
    const conversation = new Conversation();
    conversation.title = createConversationDto.title;
    // Set other properties as needed
    return this.conversationRepo.create(conversation);
  }
}
