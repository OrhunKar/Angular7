import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared-student/student.service';

@Component({
  selector: 'app-student-available-course-list',
  templateUrl: './student-available-course-list.component.html',
  styleUrls: ['./student-available-course-list.component.css']
})
export class StudentAvailableCourseListComponent implements OnInit {

  constructor( private service : StudentService) { }

  get courseList(){
    return this.service.courseList
  }

  ngOnInit(): void {
    this.service.refreshCourseList();
  }

  onEnroll(CID : number): void{
    if(confirm("Are you sure to enroll course " + CID + "?"))
      this.service.postStudent(CID).subscribe(res => { 
        this.service.refreshCourseList;
      });
  }

}
