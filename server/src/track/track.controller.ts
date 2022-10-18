import { Controller, Get, Post, Delete } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('/track')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  create() {
    return this.trackService.create();
  }
  @Get()
  getOne() {
    return this.trackService.getOne();
  }
  @Get()
  getAll() {
    return this.trackService.getAll();
  }
  @Delete()
  delete() {
    return this.trackService.delete();
  }
}
