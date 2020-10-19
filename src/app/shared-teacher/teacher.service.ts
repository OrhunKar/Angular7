import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, Student } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  courseList : Course[];
  courseDetail : Course;

  enrolledStudentList : Student[];

  tName : string;

  //local connnection to the API 
  //readonly rootURL = "http://localhost:62094/api"
  
  //Azure API connection
  readonly rootURL = "http://vedufirststepazure.azurewebsites.net/api"
  
  constructor(private http: HttpClient) { }

  setTeacherName(name){
    this.tName = name;
  }

  async refreshCourseList(){
    await this.http.get(this.rootURL + '/Teachers/' + this.tName +  '/Courses').toPromise().then(res => {
      this.courseList = res as Course[]
      this.courseDetail = this.courseList[0]
    });
  }

  async refreshEnrolledStudentList(CID: number){
    await this.http.get(this.rootURL + '/Teachers/Students/' + CID).toPromise().then(res => this.enrolledStudentList = res as Student[]);
  }

  putLink(formData : Course){
    return this.http.put(this.rootURL + '/Courses/' + formData.CID,formData);
  }


}
