import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class TypesRepository {
  async findOne(slug: string) {
    const content = await readFile('data/types/types.json', 'utf8');
    const types = JSON.parse(content);
    const type = types.find((type) => type.name === slug);
    return type;
  }

  async findAll() {
    const content = await readFile('data/types/types.json', 'utf8');
    const types = JSON.parse(content);
    return types;
  }
}
