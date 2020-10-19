import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admin;
  student;
  teacher;
  course;
  
  constructor() { }

  ngOnInit() {
    this.admin = document.getElementById("admin");
    this.student = document.getElementById("student");
    this.teacher = document.getElementById("teacher");
    this.course = document.getElementById("course");
    this.student.style.display = "none"
    this.teacher.style.display = "none"
    this.course.style.display = "none"
  }
  navigationToggle(display : string){
    switch(display){
      case "student":
        this.admin.style.display = "none";
        this.student.style.display = "block";
        this.teacher.style.display = "none";
        this.course.style.display = "none";
        break;
      case "course":
        this.admin.style.display = "none";
        this.student.style.display = "none";
        this.teacher.style.display = "none";
        this.course.style.display = "block";
        break;
      case "teacher":
        this.admin.style.display = "none";
        this.student.style.display = "none";
        this.teacher.style.display = "block";
        this.course.style.display = "none";
        break;
      case "admin":
        this.admin.style.display = "block";
        this.student.style.display = "none";
        this.teacher.style.display = "none";
        this.course.style.display = "none";
        break;
    }
  }
}
