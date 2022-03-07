import { Controller, Get, Param } from '@nestjs/common';
import { TypesService } from './types.services';

@Controller('types')
export class TypesController {
  constructor(public typesService: TypesService) {}

  @Get()
  getAlltags() {
    return this.typesService.findAll();
  }

  @Get('/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.typesService.findOne(slug);
  }
}
