import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared-student/student.service';

@Component({
  selector: 'app-student-enrolled-course-list',
  templateUrl: './student-enrolled-course-list.component.html',
  styleUrls: ['./student-enrolled-course-list.component.css']
})
export class StudentEnrolledCourseListComponent implements OnInit {

  constructor( private service : StudentService) { }
  
  get enrolledCourseList(){
      return this.service.enrolledCourseList
  }
  
  ngOnInit(): void {
    this.service.refreshEnrolledCourseList();
  }
}
