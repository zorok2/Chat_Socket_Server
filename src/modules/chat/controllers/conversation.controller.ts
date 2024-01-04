import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConversationService } from '../services/conversation.service';
import { CreateConversationDto } from '../dto/CreateConversationDto.dto';

@Controller('conversation')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  findAll() {
    return this.conversationService.findAll();
  }

  @Post()
  create(@Body() createConversationDto: CreateConversationDto) {
    return this.conversationService.create(createConversationDto);
  }
}
