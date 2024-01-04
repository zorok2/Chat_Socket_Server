import { ConversationService } from './conversation.service';
import { MessagesService } from './message.service';
import { ParticipantsService } from './participant.service';
import { UsersService } from './user.service';

export const services = [
  ConversationService,
  MessagesService,
  ParticipantsService,
  UsersService,
];
