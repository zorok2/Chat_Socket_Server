import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from './users.entity';
import { Conversation } from './conversation.entity';
import { Attachments } from './attachments.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Users, (user) => user.messages)
  @JoinColumn({ name: 'senderId' })
  senderId: Users;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages)
  @JoinColumn({ name: 'conversationId' })
  conversation: Conversation;

  // @ManyToOne(() => Attachments, (attachment) => attachment.id, {
  //   nullable: true,
  // })
  // @JoinColumn({ name: 'attachmentId' })
  // attachmentId: Attachments;
  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sentAt: Date;

  @Column()
  status: string;
}
