import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from 'src/entities/participants.entity';
import { Repository } from 'typeorm';
import { CreateParticipantDto } from '../dto/CreateParticipantDto.dto';
import { UsersRepository } from '../repository/user.repository';
import { ConversationRepository } from '../repository/conversation.repository';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Participants)
    private readonly participantsRepository: Repository<Participants>,
    private readonly userRepo: UsersRepository,
    private readonly conversationRepo: ConversationRepository,
  ) {}

  async findAll(): Promise<Participants[]> {
    return this.participantsRepository.find();
  }

  async create(
    createParticipantDto: CreateParticipantDto,
  ): Promise<Participants> {
    const participant = new Participants();
    participant.userId = await this.userRepo.findOne(
      createParticipantDto.userId,
    );
    participant.conversationId = await this.conversationRepo.findOne(
      createParticipantDto.conversationId,
    );
    // Set other properties as needed
    return this.participantsRepository.save(participant);
  }
}
