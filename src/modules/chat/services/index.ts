import { ConversationService } from './conversation.service';
import { MessagesService } from './message.service';
import { ParticipantsService } from './participant.service';
import { UsersService } from '../../users/services/user.service';

export const chatServices = [
  ConversationService,
  MessagesService,
  ParticipantsService,
];
