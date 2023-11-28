import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CommonModule,
  IMAGE_CONFIG,
  ImageLoaderConfig,
  NgOptimizedImage,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ClickOutsideDirective } from 'src/app/util/click-outside.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    NgOptimizedImage,
  ],
  declarations: [HomePage, ClickOutsideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: (config: ImageLoaderConfig) => {
        return `ttps://www.themealdb.com/images/media/meals/${config.src}-${config.width}`;
      },
    },
  ],
})
export class HomePageModule {}
