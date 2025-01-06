import { Module } from '@nestjs/common';
import { AmazonService } from './amazon.service';
import { AmazonController } from './amazon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amazon } from './entities/amazon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Amazon])],
  controllers: [AmazonController],
  providers: [AmazonService],
})
export class AmazonModule { }
