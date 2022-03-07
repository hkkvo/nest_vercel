import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesRepository } from './types.repository';
import { TypesService } from './types.services';

@Module({
  controllers: [TypesController],
  providers: [TypesService, TypesRepository],
})
export class TypesModule {}
