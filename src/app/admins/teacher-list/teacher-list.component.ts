import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/admin.model';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private service : AdminService) { }

  get teacherList(){
    return this.service.teacherList;
  }

  ngOnInit() {
    this.service.refreshTeacherList();
  }

  populateForm(teacher : Teacher){
    this.service.teacherFormData = Object.assign({}, teacher);
  }

  onDelete(id : number){
    if(confirm("Are you sure to delete this Teacher?"))
    this.service.deleteTeacher(id).subscribe(res=>{
      this.service.refreshTeacherList();
    })
  }
}
