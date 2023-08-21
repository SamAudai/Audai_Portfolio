import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ServicesComponent } from './home/service_/services.component';


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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
