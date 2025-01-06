import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Amazon } from './entities/amazon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AmazonService {
  constructor(
    @InjectRepository(Amazon)
    private amazonRepository: Repository<Amazon>,
    private dataSource: DataSource,
  ) { }

  async create(amazon: Record<string, any>): Promise<Amazon> {
    const newHandler = this.amazonRepository.create({
      metadata: amazon as any,
    });
    return this.amazonRepository.save(newHandler);
  }

  async findAll(): Promise<Amazon[]> {
    return this.amazonRepository.find();
  }

  async findOne(id: number): Promise<Amazon | null> {
    return this.amazonRepository.findOneBy({ id });
  }
}
