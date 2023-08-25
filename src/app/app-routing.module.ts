import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './service_/services.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'home', 
    component: HomeComponent
  },  
  {
    path:'about', 
    component: AboutComponent
  },
  {
    path:'portfolio', 
    component: PortfolioComponent
  },
  {
    path:'services', 
    component: ServicesComponent
  },
  {
    path:'contact', 
    component: ContactComponent
  },  
  {
    path:'', 
    redirectTo:'home', 
    pathMatch:'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
    //redirectTo:'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
