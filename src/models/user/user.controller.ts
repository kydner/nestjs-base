import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: UserDTO): Promise<any> {
    return data;
    const user = await this.userService.create(data);
    return user;
  }
}
