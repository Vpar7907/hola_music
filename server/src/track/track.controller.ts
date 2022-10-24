import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { UseInterceptors } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadedFiles } from '@nestjs/common/decorators';
import { Express } from 'express';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(
    @Body() dto: CreateTrackDto,
    @UploadedFiles()
    files: {
      picture?: Express.Multer.File[];
      audio?: Express.Multer.File[];
    },
  ) {
    const {audio, picture} = files
    return this.trackService.create(dto, picture[0], audio[0] );
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
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
  createComment(@Body() dto: CreateCommentDto) {
    return this.trackService.createComment(dto);
  }
}
