import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatController } from './controllers/chat.controller';
import { ChatService } from './services/chat.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { Participants } from 'src/entities/participants.entity';
import { Messages } from 'src/entities/message.entity';
import { Conversation } from 'src/entities/conversation.entity';
import { ConversationRepository } from './repository/conversation.repository';
import { MessagesRepository } from './repository/message.repository';
import { ParticipantsRepository } from './repository/participant.repository';
import { WebSocketGateway } from '@nestjs/websockets';
import { AppGateway } from './app.gateway';
import { chatRepositories } from './repository';
import { chatServices } from './services';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Participants, Messages, Conversation]),
  ],
  controllers: [ChatController],
  providers: [...chatRepositories, ...chatServices],
})
export class ChatModule {}
