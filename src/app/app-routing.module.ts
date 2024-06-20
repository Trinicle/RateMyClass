import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "Home",
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login"
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: "Signup"
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
