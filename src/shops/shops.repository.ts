import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class ShopsRepository {
  async findOne(slug: string) {
    const content = await readFile('data/shops/shops.json', 'utf8');
    const shops = JSON.parse(content);
    const shop = shops.data.find((shop) => shop.slug === slug);
    return shop;
  }

  async findAll() {
    const content = await readFile('data/shops/shops_pagination.json', 'utf8');
    const shops = JSON.parse(content);
    return shops;
  }
  async findAllTopShops() {
    const content = await readFile('data/topshops/topshops.json', 'utf8');
    const shops = JSON.parse(content);
    return shops;
  }
}
