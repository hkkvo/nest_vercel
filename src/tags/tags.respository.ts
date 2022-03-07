import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class TagsRepository {
  async findOne(slug: string) {
    const content = await readFile('data/tags/tags.json', 'utf8');
    const tags = JSON.parse(content);
    const tag = tags.data.find((tag) => tag.slug === slug);
    return tag;
  }

  async findAll() {
    const content = await readFile('data/tags/tags_pagination.json', 'utf8');
    const tags = JSON.parse(content);
    return tags;
  }
}
