import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RouterModule & Routes activate routing service in Angular
import { RouterModule, Routes } from '@angular/router';

// Include components for which router service to be activated
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminsComponent } from './admins/admins.component';
import { HomeComponent } from './home/home.component'
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './user/login/login.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
