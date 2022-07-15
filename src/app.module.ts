import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(String(process.env.MONGO_URL), {
      dbName: String(process.env.MONGO_DB),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
