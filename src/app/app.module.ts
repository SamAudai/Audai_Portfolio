import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
//import { LanguageService } from './services/language.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './service_/services.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './home/image/image.component';
import { TextComponent } from './home/text/text.component';
import { SkillComponent } from './home/text/skill/skill.component';
import { ItemServiceComponent } from './service_/item-service/item-service.component';
import { ItemPortfolioComponent } from './portfolio/item-portfolio/item-portfolio.component';
import { SubserviceComponent } from './about/subservice/subservice.component';
import { TextaboutComponent } from './about/textabout/textabout.component';
import { ImageaboutComponent } from './about/imageabout/imageabout.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    ServicesComponent,
    HeaderComponent,
    ImageComponent,
    TextComponent,
    SkillComponent,    
    ItemServiceComponent, ItemPortfolioComponent, SubserviceComponent, TextaboutComponent, ImageaboutComponent, NavbarComponent, PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}