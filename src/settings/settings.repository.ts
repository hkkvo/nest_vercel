import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class SettingsRepository {
  async findOne(slug: string) {
    const content = await readFile('data/settings/settings.json', 'utf8');
    const settings = JSON.parse(content);
    const setting = settings.data.find((setting) => setting.slug === slug);
    return setting;
  }

  async findAll() {
    const content = await readFile(
      'data/settings/settings_pagination.json',
      'utf8',
    );
    const settings = JSON.parse(content);
    return settings;
  }
}
