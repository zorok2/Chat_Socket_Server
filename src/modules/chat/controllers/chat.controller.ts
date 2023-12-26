import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChatService } from '../services/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('messages')
  async getMessages() {



    return this.chatService.getMessages(



      
    );
  }

  @Post('messages')
  async createMessage(@Body() data: { content: string; senderId: number }) {
    return this.chatService.createMessage(data.content, data.senderId);
  }
}
