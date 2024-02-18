import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/home-page.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/pages/contactPage/contact-page.component';

const rotues: Routes = [
  // {
  //   path:'',
  //   component: HomePageComponent
  // },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContactPageComponent
  },
  {
    path:'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:'countries'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(rotues),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
