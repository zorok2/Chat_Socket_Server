import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Users } from './users.entity';
import { Messages } from './message.entity';

@Entity()
export class Conversation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'creator' })
  creator: Users;

  @OneToMany(() => Messages, (message) => message.conversation)
  messages: Messages[];
}
