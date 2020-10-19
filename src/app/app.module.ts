import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AdminsComponent } from './admins/admins.component';
import { AdminComponent } from './admins/admin/admin.component';
import { AdminListComponent } from './admins/admin-list/admin-list.component';
import { AdminService } from './shared/admin.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './admins/student-list/student-list.component';
import { TeacherListComponent } from './admins/teacher-list/teacher-list.component';
import { CourseListComponent } from './admins/course-list/course-list.component';
import { StudentAddComponent } from './admins/student-add/student-add.component';
import { TeacherAddComponent } from './admins/teacher-add/teacher-add.component';
import { StudentAvailableCourseListComponent } from './student/student-available-course-list/student-available-course-list.component';
import { StudentEnrolledCourseListComponent } from './student/student-enrolled-course-list/student-enrolled-course-list.component';
import { TeacherCourseListComponent } from './teacher/teacher-course-list/teacher-course-list.component';
import { TeacherCourseDetailComponent } from './teacher/teacher-course-detail/teacher-course-detail.component';
import { LoginComponent } from './user/login/login.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    AdminComponent,
    AdminListComponent,
    AdminLoginComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    StudentListComponent,
    TeacherListComponent,
    CourseListComponent,
    StudentAddComponent,
    TeacherAddComponent,
    StudentAvailableCourseListComponent,
    StudentEnrolledCourseListComponent,
    TeacherCourseListComponent,
    TeacherCourseDetailComponent,
    LoginComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
