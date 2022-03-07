import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class CategoriesRepository {
  async findOne(slug: string) {
    const content = await readFile('data/categories/categories.json', 'utf8');
    const categories = JSON.parse(content);
    const category = categories.data.find((category) => category.slug === slug);
    return category;
  }

  async findAll() {
    const content = await readFile(
      'data/categories/categories_pagination.json',
      'utf8',
    );
    const categories = JSON.parse(content);
    return categories;
  }
}
