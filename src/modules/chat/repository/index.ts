import { ConversationRepository } from "./conversation.repository";
import { MessagesRepository } from "./message.repository";
import { ParticipantsRepository } from "./participant.repository";
import { UsersRepository } from "./user.repository";

export const reppositories =[
    ConversationRepository,
    MessagesRepository,
    ParticipantsRepository,
    UsersRepository
];