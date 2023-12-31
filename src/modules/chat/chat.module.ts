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
import { UsersRepository } from './repository/user.repository';
import { MessagesRepository } from './repository/message.repository';
import { ParticipantsRepository } from './repository/participant.repository';
import { reppositories } from './repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Participants, Messages, Conversation]),
  ],
  controllers: [ChatController],
  providers: [
    ChatService,
    ...reppositories
  ],
})
export class ChatModule {}
