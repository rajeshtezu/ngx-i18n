import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nServiceService {

  localeEvent = new Subject<string>();

  constructor(private translate: TranslateService) { }

  changeLocale(locale: string){
    this.translate.use(locale);
    this.localeEvent.next(locale);
  }

}
