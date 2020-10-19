import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service : AdminService) { }

  get courseList(){
    return this.service.courseList;
  }

  ngOnInit() {
    this.service.refreshCourseList();
  }

}
