import { Controller, Get } from '@nestjs/common';
import { trackService } from './track.service';

@Controller('/track')
export class trackController {
  constructor(private trackService: trackService) {}
  @Get()
  getAll() {}
}
