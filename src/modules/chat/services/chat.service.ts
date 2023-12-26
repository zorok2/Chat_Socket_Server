import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Socket } from 'socket.io';
import { Messages } from 'src/entities/message.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Messages)
    private messagesRepository: Repository<Messages>,
  ) {}

  async getMessages(): Promise<Messages[]> {
    return this.messagesRepository.find();
  }

  async createMessage(content: string, senderId: number): Promise<Messages> {
    const message = new Messages();
    message.content = content;
    message.senderId.id = senderId;
    message.sentAt = new Date();
    message.status = 'sent';

    return this.messagesRepository.save(message);
  }

  async handleSocketConnection(socket: Socket): Promise<void> {
    console.log('New client connected');

    // Lắng nghe sự kiện 'message' từ client
    socket.on('message', async (data) => {
      const { content, senderId } = data;

      // Lưu tin nhắn vào cơ sở dữ liệu
      const message = await this.createMessage(content, senderId);

      // Gửi lại tin nhắn đã lưu cho tất cả các client đang kết nối
      socket.emit('message', message);
      socket.broadcast.emit('message', message);
    });

    // Lắng nghe sự kiện 'disconnect' từ client
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  }
}
