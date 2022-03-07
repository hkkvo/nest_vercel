import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(public productRepo: ProductsRepository) {}

  findOne(slug: string) {
    return this.productRepo.findOne(slug);
  }

  findAll() {
    return this.productRepo.findAll();
  }

  findAllPopularShops() {
    return this.productRepo.findAllPopularShops();
  }
}
