import { Controller, Get, Param } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(public tagsService: TagsService) {}

  @Get()
  getAlltags() {
    return this.tagsService.findAll();
  }

  @Get('/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.tagsService.findOne(slug);
  }
}
