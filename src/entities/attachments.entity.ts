import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Attachments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_attach: string;
}
