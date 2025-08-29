import { Controller, Get, Post, Body } from '@nestjs/common';
import { HealthService } from './health.service';
import { PingDto } from './dto/ping.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  ping() {
    return this.healthService.getStatus();
  }

  @Get('version')
  getVersion() {
    return this.healthService.getVersion();
  }

  @Post('ping')
  echo(@Body() pingDto: PingDto) {
    return { message: pingDto.message, id: pingDto.id + 1 };
  }
}
