import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/admin.model';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service : AdminService) { }

  get studentList(){
    return this.service.studentList;
  }

  ngOnInit() {
    this.service.refreshStudentList();
  }

  populateForm(student : Student){
    this.service.studentFormData = Object.assign({}, student);
  }

  onDelete(id : number){
    if(confirm("Are you sure to delete this Student?"))
    this.service.deleteStudent(id).subscribe(res=>{
      this.service.refreshStudentList();
    })
  }
}
