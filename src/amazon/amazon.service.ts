import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Amazon } from './entities/amazon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AmazonService {
  constructor(
    @InjectRepository(Amazon)
    private amazonRepository: Repository<Amazon>,
    private dataSource: DataSource
  ) { }
  async create(amazon: Omit<any, "id">): Promise<Amazon> {
    const newUser = this.amazonRepository.create(amazon);
    return this.amazonRepository.save(newUser);
  }
}