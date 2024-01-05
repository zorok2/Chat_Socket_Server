import { ConversationRepository } from "./conversation.repository";
import { MessagesRepository } from "./message.repository";
import { ParticipantsRepository } from "./participant.repository";

export const chatRepositories =[
    ConversationRepository,
    MessagesRepository,
    ParticipantsRepository,
];