import { ApiProperty } from '@nestjs/swagger';
export class UserDTO {
  // @ApiProperty()
  // id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  isActive: boolean;
}
