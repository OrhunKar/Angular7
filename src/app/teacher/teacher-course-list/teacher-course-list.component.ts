import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared-teacher/teacher.model';
import { TeacherService } from 'src/app/shared-teacher/teacher.service';

@Component({
  selector: 'app-teacher-course-list',
  templateUrl: './teacher-course-list.component.html',
  styleUrls: ['./teacher-course-list.component.css']
})
export class TeacherCourseListComponent implements OnInit {

  constructor(private service : TeacherService) { }

  get courseList(){
    return this.service.courseList
  }

  ngOnInit(): void {
    this.service.refreshCourseList();
  }

  generateCourseDetail(course : Course){
    this.service.courseDetail = Object.assign({}, course);
    this.service.refreshEnrolledStudentList(course.CID)
  }

}
