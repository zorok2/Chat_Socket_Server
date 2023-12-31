import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Conversation } from './conversation.entity';
import { Messages } from './message.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column()
  displayName: string;
  
  @OneToMany(()=> Conversation, (c)=> c.creator)
  conversations: Conversation[]

  @OneToMany(()=> Messages, (c)=> c.senderId)
  messages: Messages[]

  @ManyToOne(() => Users, user => user.id)
  userId: Users;
}
