import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async create(userDTO: UserDTO) {
    const data = this.usersRepository.create(userDTO);
    await this.usersRepository.save(data);
    return data;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
