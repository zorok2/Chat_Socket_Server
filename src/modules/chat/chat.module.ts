import { ChatController } from './controllers/chat.controller';
import { ChatService } from './services/chat.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ChatController, ],
    providers: [
        ChatService, ],
})
export class ChatModule {}
