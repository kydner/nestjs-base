import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/users/users.entity';
import { Repository } from 'typeorm';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  async create(userDTO: UsersDTO) {
    const data = this.usersRepository.create(userDTO);
    await this.usersRepository.save(data);
    return data;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
