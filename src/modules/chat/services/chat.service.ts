import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socket } from 'socket.io';
import { Messages } from 'src/entities/message.entity';
import { MessagesService } from './message.service';
import { UsersService } from './user.service';
import { UsersRepository } from '../repository/user.repository';
import { Conversation } from 'src/entities/conversation.entity';

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

    // Set other properties as needed
    // const savedMessage = await this.messagesRepository.save(message);

    // You may want to handle saving the message to the database and any other logic here.

    // return savedMessage;
  }

  // async handleSocketConnection(socket: Socket): Promise<void> {
  //   console.log('New client connected');

  //   // Lắng nghe sự kiện 'message' từ client
  //   socket.on('message', async (data) => {
  //     const { content, senderId } = data;

  //     // Lưu tin nhắn vào cơ sở dữ liệu
  //     const message = await this.messageService.create(content, senderId);

  //     // Gửi lại tin nhắn đã lưu cho tất cả các client đang kết nối
  //     socket.emit('message', message);
  //     socket.broadcast.emit('message', message);
  //   });

  //   // Lắng nghe sự kiện 'disconnect' từ client
  //   socket.on('disconnect', () => {
  //     console.log('Client disconnected');
  //   });
  // }
}
