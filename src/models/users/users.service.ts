import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/models/users/users.entity';
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
    if (id === 'me')
      return this.usersRepository.findOne(
        'e7b5a4c5-ed4a-4933-86e5-8cc8b2d3ef39',
      );
    return this.usersRepository.findOne(id);
  }
  me(): Promise<Users> {
    return this.usersRepository.findOne('e7b5a4c5-ed4a-4933-86e5-8cc8b2d3ef39');
  }
  getUser(username: string): Promise<Users> {
    return this.usersRepository.findOne({
      where: { username },
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
