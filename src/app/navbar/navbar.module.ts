import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralNavbarComponent } from './general-navbar/general-navbar.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';

@NgModule({
  declarations: [
    GeneralNavbarComponent,
    HomeNavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GeneralNavbarComponent,
    HomeNavbarComponent
  ]
})
export class NavbarModule { }
