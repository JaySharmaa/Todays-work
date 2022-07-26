import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
{ path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule)},
  { path: 'contactus', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {path:'cart', loadChildren:() => import('./cart/cart.module').then(m => m.CartModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
