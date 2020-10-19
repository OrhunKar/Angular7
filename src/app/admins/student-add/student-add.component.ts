import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private service : AdminService) { }

  get studentFormData(){
    return this.service.studentFormData
  }


  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.studentFormData = {
      SID : null,
      Sname : '',
      Infromation : '',
      CourseID : null,
    }
  }

  onSubmit( form : NgForm){
    if(form.value.SID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postStudent(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshStudentList();
    });
  }
  
  updateRecord(form: NgForm){
    this.service.putStudent(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshStudentList();
    });
  }

}
