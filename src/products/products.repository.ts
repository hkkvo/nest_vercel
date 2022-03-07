import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class ProductsRepository {
  async findOne(slug: string) {
    const content = await readFile('data/products/products.json', 'utf8');
    const products = JSON.parse(content);
    const product = products.data.find((product) => product.slug === slug);
    return product;
  }

  async findAll() {
    const content = await readFile(
      'data/products/products_pagination.json',
      'utf8',
    );
    const products = JSON.parse(content);
    return products;
  }

  async findAllPopularShops() {
    const content = await readFile(
      'data/popularproducts/popularproducts.json',
      'utf8',
    );
    const products = JSON.parse(content);
    return products;
  }
}
