import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { CreateUsersDTO } from './create-users.dto';

export class UpdateUsersDTO extends CreateUsersDTO {
  @ApiProperty()
  @IsUUID('all')
  id: string;
}
