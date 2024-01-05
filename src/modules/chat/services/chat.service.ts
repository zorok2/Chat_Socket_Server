import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socket } from 'socket.io';
import { Messages } from 'src/entities/message.entity';
import { MessagesService } from './message.service';
import { UsersService } from '../../users/services/user.service';
import { Conversation } from 'src/entities/conversation.entity';
import { UsersRepository } from 'src/modules/users/repositories/user.repository';

@Injectable()
export class ChatService {
  constructor(
    private readonly messageService: MessagesService,
    private readonly userRepo: UsersRepository,
  ) {}

  async createMessage(senderId: string, receiverId: string, content: string) {
    const message = new Messages();
    message.senderId = await this.userRepo.findOne(senderId);
    message.content = content;
    const conver = new Conversation();
  }
}
