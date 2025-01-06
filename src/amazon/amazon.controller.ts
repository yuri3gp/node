import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmazonService } from './amazon.service';

@Controller('sns')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Post()
  create(@Body() createAmazonDto: any) {
    return this.amazonService.create(createAmazonDto);
  }
}