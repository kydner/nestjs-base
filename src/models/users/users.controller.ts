import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/user')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.findOne(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe())
  async create(@Body() data: UsersDTO): Promise<any> {
    const user = await this.userService.create(data);
    return user;
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.userService.remove(id);
    return id;
  }
}
