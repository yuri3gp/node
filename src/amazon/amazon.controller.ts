import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmazonService } from './amazon.service';

@Controller('sns')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Post()
  create(@Body() createAmazonDto: any) {
    return this.amazonService.create(createAmazonDto);
  }
  @Get()
  findAll() {
    return this.amazonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amazonService.findOne(+id);
  }
}