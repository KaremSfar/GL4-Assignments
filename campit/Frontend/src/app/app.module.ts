import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {DynamicscriptloaderService} from "./services/dynamicscriptloader.service";
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { FirstElementComponent } from './home/first-element/first-element.component';
import { FooterComponent } from './footer/footer.component';
import { CampComponent } from './home/camp/camp.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CampSitesComponent } from './camp-sites/camp-sites.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CampSiteComponent } from './camp-sites/camp-site/camp-site.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";
import { AlertComponent } from './alert/alert.component';
import {AlertService} from "./services/alert.service";
import {JwtInterceptor} from "./services/jwt.interceptor";
import {ErrorInterceptor} from "./services/error.interceptor";
import {fakeBackendProvider} from "./services/fake-backend";
import { CampFormComponent } from './camp-sites/camp-form/camp-form.component';

import { baseURL } from './shared/baseurl';
import {ProcessHTTPMsgService} from "./services/process-httpmsg.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurServicesComponent,
    FirstElementComponent,
    FooterComponent,
    CampComponent,
    RegisterComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    CampSitesComponent,
    SignInComponent,
    CampSiteComponent,
    AlertComponent,
    CampFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DynamicscriptloaderService,
    AuthService,
    AuthGuard,
    AlertService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
