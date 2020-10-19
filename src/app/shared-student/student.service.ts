import { Injectable } from '@angular/core';
import { Course, Student } from './student.model';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../shared-user/user.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  courseList : Course[];
  CID : Course["CID"];

  enrolledCourseList : Course[];

  currentStudent : Student;

  currentStudentName : string;
 
  //local connnection to the API 
  //readonly rootURL = "http://localhost:62094/api"
  
  //Azure API connection
  readonly rootURL = "http://vedufirststepazure.azurewebsites.net/api"

  constructor(private http: HttpClient, private userService: UserService) { }

  setCurrentStudentName(name : string){
    this.currentStudentName = name;
  }

  async setStudent(name : string){
    await this.http.get(this.rootURL + "/Students/" + name + "/All").toPromise().then( res => {
      var dummyList = res as Student[];
      this.currentStudent = dummyList[0];
      console.log(this.currentStudent.Sname + "setF")
      })
  }

  refreshCourseList(){
    return this.http.get(this.rootURL + '/Courses').toPromise().then(res => this.courseList = res as Course[]);
  }

  async refreshEnrolledCourseList(){
    console.log(this.userService.loginName + " == " + this.currentStudentName)
    await this.setStudent(this.currentStudentName)
    return this.http.get(this.rootURL + '/Courses/' + this.currentStudent.Sname).toPromise().then(res => this.enrolledCourseList = res as Course[]);
  }

  postStudent(CID : Course["CID"]){
    
    var dummyStudent = this.currentStudent
    dummyStudent.CourseID = CID;
    return this.http.post(this.rootURL + '/Students',dummyStudent);
  }
}
