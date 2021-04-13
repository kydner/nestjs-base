import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { UnitsInterface } from '../units.interface';
export class CreateUnitsDto implements UnitsInterface {
  @IsUUID('all')
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
