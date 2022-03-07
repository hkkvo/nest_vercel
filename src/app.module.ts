import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';
import { TagsModule } from './tags/tags.module';
import { CategoriesModule } from './categories/categories.module';
import { SettingsModule } from './settings/settings.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { TypesModule } from './types/types.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

console.log(
  '=======================Dir Name==============',
  join(__dirname, '.', 'data'),
);

@Module({
  imports: [
    ProductsModule,
    ShopsModule,
    TagsModule,
    CategoriesModule,
    SettingsModule,
    AttachmentsModule,
    TypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
