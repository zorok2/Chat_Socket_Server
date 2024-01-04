import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagesService } from '../services/message.service';
import { CreateMessageDto } from '../dto/createMessageDto.dto';
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }
}
