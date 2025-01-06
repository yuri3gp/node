import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AmazonService } from './amazon.service';

@Controller('sns')
export class AmazonController {
  constructor(private readonly amazonService: AmazonService) { }

  @Get()
  create(
    @Query() queryParams: any,
    @Param() routeParams: any
  ) {
    const combinedParams = { ...queryParams, ...routeParams };
    return this.amazonService.create(combinedParams);
  }
  @Get("/all")
  findAll() {
    return this.amazonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amazonService.findOne(+id);
  }
}