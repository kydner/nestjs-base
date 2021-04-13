import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UnitsService } from './units.service';

@ApiTags('Units')
@Controller('api/Units')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UnitsController {
  constructor(private userService: UnitsService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }
}
