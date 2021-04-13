import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Units } from './units.entity';

@Injectable()
export class UnitsService {
  constructor(
    @InjectRepository(Units)
    private usersRepository: Repository<Units>,
  ) {}

  findAll(): Promise<Units[]> {
    return this.usersRepository.find();
  }
}
