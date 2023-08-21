import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['en', 'ar']);
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  //Called for change language site (english/arabic)
  changeLanguage(lang: string) {
    //console.log(lang);            
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  //Called for change theme mode (dark/light)
  changeTheme(theme: any) {
    localStorage.setItem("theme", theme);
          
  }

}
