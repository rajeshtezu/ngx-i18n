import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeComponent } from './home.component';
import { HomeRouter } from './home.router.module';

export function homeHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRouter,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: homeHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
