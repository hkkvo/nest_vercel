import { Injectable } from '@nestjs/common';
import { TypesRepository } from './types.repository';

@Injectable()
export class TypesService {
  constructor(public typesRepo: TypesRepository) {}

  findOne(slug: string) {
    return this.typesRepo.findOne(slug);
  }

  findAll() {
    return this.typesRepo.findAll();
  }
}
