import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessagesRepository } from '../repository/message.repository';
import { Messages } from 'src/entities/message.entity';
import { CreateMessageDto } from '../dto/createMessageDto.dto';
import { ConversationRepository } from '../repository/conversation.repository';
import { UsersRepository } from 'src/modules/users/repositories/user.repository';

@Injectable()
export class MessagesService {
  constructor(
    private readonly messagesRepository: MessagesRepository,
    private readonly userReposity: UsersRepository,
    private readonly conversationRepo: ConversationRepository,
  ) {}

  async findAll() {
    return this.messagesRepository.findAll();
  }

  async create(createMessageDto: CreateMessageDto): Promise<Messages> {
    const message = new Messages();
    message.senderId = await this.userReposity.findOne(
      createMessageDto.senderId,
    );
    message.conversation = await this.conversationRepo.findOne(
      createMessageDto.conversationId,
    );
    message.content = createMessageDto.content;
    message.sentAt = new Date(); // Assuming sentAt is set on the server side
    message.status = createMessageDto.status;
    // Set other properties as needed
    return this.messagesRepository.create(message);
  }
}
