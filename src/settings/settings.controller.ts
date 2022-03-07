import { Controller, Get, Param } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(public settingsService: SettingsService) {}

  @Get()
  getAllsettings() {
    return this.settingsService.findAll();
  }

  @Get('/:slug')
  getAProduct(@Param('slug') slug: string) {
    return this.settingsService.findOne(slug);
  }
}
