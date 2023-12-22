import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from './users.entity';
import { Conversation } from './conversation.entity';

@Entity()
export class Participants {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, user => user.id)
  userId: Users;

  @ManyToOne(() => Conversation, conversation => conversation.id)
  conversationId: Conversation;
}
