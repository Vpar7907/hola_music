import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
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
