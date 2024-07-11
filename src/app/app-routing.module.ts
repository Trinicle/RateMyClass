import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityRatingComponent } from './add-university-rating/add-university-rating.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseInfoComponent } from './course-rating/course-rating.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'university/:id',
    component: UniversityComponent,
    title: 'University',
  },
  {
    path: 'university/:id/courses',
    component: CoursesComponent,
    title: 'Courses',
  },
  {
    path: 'courses/:id/ratings',
    component: CourseInfoComponent,
    title: 'Course Ratings',
  },
  {
    path: 'add/university-rating/:id',
    component: AddUniversityRatingComponent,
    title: 'Add University Rating',
  },
  // {
  //   path: 'add/university-rating/:id',
  //   component: AddUniversityRatingComponent,
  //   title: 'Add University Rating',
  // },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
