import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  constructor(private service : AdminService) { }

  get teacherFormData(){
    return this.service.teacherFormData
  }


  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.teacherFormData = {
      TID : null,
      Tname : '',
      CourseID : null,
    }
  }

  onSubmit( form : NgForm){
    if(form.value.TID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postTeacher(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshTeacherList();
    });
  }
  
  updateRecord(form: NgForm){
    this.service.putTeacher(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshTeacherList();
    });
  }


}
