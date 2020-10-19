import { Injectable } from '@angular/core';
import { Admin, AdminLogin, Course, Student, Teacher } from './admin.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  formData : Admin;
  loginData : AdminLogin;
  adminList : Admin[];

  teacherFormData: Teacher;
  teacherList : Teacher[];

  studentFormData: Student;
  studentList : Student[];

  courseList : Course[];
  
  //local connnection to the API 
  //readonly rootURL = "http://localhost:62094/api"
  
  //Azure API connection
  readonly rootURL = "http://vedufirststepazure.azurewebsites.net/api"

  constructor(private http: HttpClient) { }

  postAdmin(formData : Admin){
    return this.http.post(this.rootURL + '/ADMINs',formData);
  }

  putAdmin(formData : Admin){
    return this.http.put(this.rootURL + '/ADMINs/' + formData.AID,formData);
  }

  refreshAdminList(){
    this.http.get(this.rootURL + '/ADMINs').toPromise().then(res => this.adminList = res as Admin[]);
  }

  deleteAdmin(id : number){
    return this.http.delete(this.rootURL + '/ADMINs/' + id);
  }

  //TEACHER methods add, delete etc.

  postTeacher(teacherFormData: Teacher){
    return this.http.post(this.rootURL + '/Teachers', teacherFormData);
  }

  putTeacher(teacherFormData : Teacher){
    return this.http.put(this.rootURL + '/Teachers/' + teacherFormData.TID,teacherFormData);
  }

  refreshTeacherList(){
    this.http.get(this.rootURL + '/Teachers').toPromise().then(res => this.teacherList = res as Teacher[]);
  }  

  deleteTeacher(id : number){
    return this.http.delete(this.rootURL + '/Teachers/' + id);
  }

  //STUDENT methods add, delete etc.

  postStudent(studentFormData: Student){
    return this.http.post(this.rootURL + '/Students', studentFormData);
  }

  putStudent(studentFormData : Student){
    return this.http.put(this.rootURL + '/Students/' + studentFormData.SID,studentFormData);
  }

  refreshStudentList(){
    this.http.get(this.rootURL + '/Students').toPromise().then(res => this.studentList = res as Student[]);
  }  

  deleteStudent(id : number){
    return this.http.delete(this.rootURL + '/Students/' + id);
  }

  //Course methods listing etc.

  refreshCourseList(){
    this.http.get(this.rootURL + '/Courses').toPromise().then(res => this.courseList = res as Course[]);
  } 
}
