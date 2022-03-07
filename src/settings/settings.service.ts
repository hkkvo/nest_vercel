import { Injectable } from '@nestjs/common';
import { SettingsRepository } from './settings.repository';

@Injectable()
export class SettingsService {
  constructor(public settingsRepo: SettingsRepository) {}

  findOne(slug: string) {
    return this.settingsRepo.findOne(slug);
  }

  findAll() {
    return this.settingsRepo.findAll();
  }
}
