import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { UnversityComponent } from './unversity/unversity.component';

import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './navbar/home-navbar/home-navbar.component';
import { GeneralNavbarComponent } from './navbar/general-navbar/general-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    UnversityComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HomeNavbarComponent,
    GeneralNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }