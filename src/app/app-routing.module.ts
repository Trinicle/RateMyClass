import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityRatingComponent } from './add-university-rating/add-university-rating.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseInfoComponent } from './course-rating/course-rating.component';
import { AddCourseRatingComponent } from './add-course-rating/add-course-rating.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'university/:universityId',
    component: UniversityComponent,
    title: 'University',
  },
  {
    path: 'university/:universityId/courses',
    component: CoursesComponent,
    title: 'Courses',
  },
  {
    path: 'university/:universityId/course/:courseId/ratings',
    component: CourseInfoComponent,
    title: 'Course Ratings',
  },
  {
    path: 'university/:universityId/add-rating',
    component: AddUniversityRatingComponent,
    title: 'Add University Rating',
  },
  {
    path: 'university/:universityId/course/:courseId/add-rating',
    component: AddCourseRatingComponent,
    title: 'Add Course Rating',
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
