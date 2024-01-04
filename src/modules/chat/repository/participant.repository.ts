import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participants } from 'src/entities/participants.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantsRepository {
  constructor(
    @InjectRepository(Participants)
    private participantsRepository: Repository<Participants>,
  ) {}

  async create(participant: Participants): Promise<Participants> {
    return this.participantsRepository.save(participant);
  }

  async update(id: string, participant: Participants): Promise<Participants> {
    await this.participantsRepository.update(id, participant);
    return this.participantsRepository.findOne({ where: { id: id } });
  }

  async remove(id: string): Promise<void> {
    await this.participantsRepository.delete(id);
  }
}
