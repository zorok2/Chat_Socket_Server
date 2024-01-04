import { ConversationRepository } from "./conversation.repository";
import { MessagesRepository } from "./message.repository";
import { ParticipantsRepository } from "./participant.repository";
import { UsersRepository } from "./user.repository";

export const repositories =[
    ConversationRepository,
    MessagesRepository,
    ParticipantsRepository,
    UsersRepository
];