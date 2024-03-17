import { Routes } from '@angular/router';
import { CoursesComponent } from "./components/courses/courses.component";

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'courses' }
];
