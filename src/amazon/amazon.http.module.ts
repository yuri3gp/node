
import { Module } from '@nestjs/common';
import { AmazonModule } from './amazon.module';
import { AmazonService } from './amazon.service';
import { AmazonController } from './amazon.controller';

@Module({
    imports: [AmazonModule],
    providers: [AmazonService],
    controllers: [AmazonController]
})
export class UserHttpModule { }