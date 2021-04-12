import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/users/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUsersDTO } from './dto/create-users.dto';

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
  getUser(userName: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { userName },
    });
  }

  async create(userDTO: CreateUsersDTO) {
    const data = this.usersRepository.create(userDTO);
    await this.usersRepository.save(userDTO);
    return data;
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
