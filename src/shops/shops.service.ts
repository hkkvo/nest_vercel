import { Injectable } from '@nestjs/common';
import { ShopsRepository } from './shops.repository';

@Injectable()
export class ShopsService {
  constructor(public shopsRepo: ShopsRepository) {}

  findOne(slug: string) {
    return this.shopsRepo.findOne(slug);
  }

  findAll() {
    return this.shopsRepo.findAll();
  }
  findAllTopShops() {
    return this.shopsRepo.findAllTopShops();
  }
}
