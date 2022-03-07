import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(public categoriesRepo: CategoriesRepository) {}

  findOne(slug: string) {
    return this.categoriesRepo.findOne(slug);
  }

  findAll() {
    return this.categoriesRepo.findAll();
  }
}
