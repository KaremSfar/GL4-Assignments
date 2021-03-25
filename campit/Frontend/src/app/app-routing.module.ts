import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {CampSitesComponent} from "./camp-sites/camp-sites.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthGuard} from "./services/auth.guard";


const routes: Routes = [
  { path: '', component: HomeComponent },
  // , canActivate: [AuthGuard]
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'camps', component: CampSitesComponent },
  { path: 'login', component: SignInComponent },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
