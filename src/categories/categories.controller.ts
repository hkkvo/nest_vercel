import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(public categoriesService: CategoriesService) {}

  @Get()
  getAllProducts() {
    return this.categoriesService.findAll();
  }

  @Get('/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.categoriesService.findOne(slug);
  }

  //   @Get('/categories?')
  //   getAllProductsWithLimits(@Query('limit') limit: string) {
  //     return this.categoriesService.findAll();
  //   }
}
