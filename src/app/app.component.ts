import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-i18n';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('ar');
  }

  changeLocale(locale: string) {
    this.translate.use(locale);
  }
}
