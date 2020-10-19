import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared-teacher/teacher.model';
import { TeacherService } from 'src/app/shared-teacher/teacher.service';

@Component({
  selector: 'app-teacher-course-detail',
  templateUrl: './teacher-course-detail.component.html',
  styleUrls: ['./teacher-course-detail.component.css']
})
export class TeacherCourseDetailComponent implements OnInit {

  constructor(private service : TeacherService) { }
 
  ngOnInit(): void {
    this.service.refreshCourseList();
    this.service.refreshEnrolledStudentList(this.service.courseDetail.CID);
  }

  get courseDetail(){
    return this.service.courseDetail
  }

  get enrolledStudentList(){
    return this.service.enrolledStudentList
  }

  onSubmit( form : NgForm){
    this.insertLink(form);
  }

  insertLink(form: NgForm){
    this.service.putLink(form.value).subscribe(res => { 
      this.service.refreshCourseList();
    });
  }

}
