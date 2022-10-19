import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { Track } from './schemas/track.schema';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }
  @Get(':id')
  getOne(@Param('id') id:ObjectId) {
    return this.trackService.getOne(id);
  }
  @Get()
  getAll() {
    return this.trackService.getAll();
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  createComment(@Body() dto: CreateCommentDto){
    return this.trackService.createComment(dto)
  }
}
