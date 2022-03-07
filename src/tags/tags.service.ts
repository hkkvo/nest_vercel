import { Injectable } from '@nestjs/common';
import { TagsRepository } from './tags.respository';

@Injectable()
export class TagsService {
  constructor(public tagsRepo: TagsRepository) {}

  findOne(slug: string) {
    return this.tagsRepo.findOne(slug);
  }

  findAll() {
    return this.tagsRepo.findAll();
  }
}
