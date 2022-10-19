import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.g1dlhlj.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
    AlbumModule,
  ],
})
export class AppModule {}
