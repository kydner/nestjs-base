import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { UnitsInterface } from '../units.interface';
export class UpdateUnitsDto implements UnitsInterface {
  @IsUUID('all')
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
