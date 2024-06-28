import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './navbar/home-navbar/home-navbar.component';
import { GeneralNavbarComponent } from './navbar/general-navbar/general-navbar.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SearchComponent } from './home/search/search.component';
import { UniversityComponent } from './university/university.component';
import { ChartComponent } from './university/chart/chart.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        HomeNavbarComponent,
        GeneralNavbarComponent,
        SearchComponent,
        UniversityComponent,
        ChartComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        SharedModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi()), provideCharts(withDefaultRegisterables())] })
export class AppModule {}
