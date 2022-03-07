import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/')
export class ProductsController {
  constructor(public productsService: ProductsService) {}

  @Get('products')
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get('products/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.productsService.findOne(slug);
  }

  @Get('popular-products')
  getPopularProducts() {
    return this.productsService.findAllPopularShops();
  }
}
