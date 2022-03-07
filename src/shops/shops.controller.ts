import { Controller, Get, Param } from '@nestjs/common';
import { ShopsService } from './shops.service';

@Controller('/')
export class ShopsController {
  constructor(public shopsService: ShopsService) {}

  @Get('shops')
  getAllProducts() {
    return this.shopsService.findAll();
  }

  @Get('shops/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.shopsService.findOne(slug);
  }

  @Get('top-shops')
  getAllTopShops() {
    return this.shopsService.findAllTopShops();
  }
}
