import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/shared-student/student.service';
import { TeacherService } from 'src/app/shared-teacher/teacher.service';
import { UserService } from 'src/app/shared-user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service : UserService,
              private teacherService : TeacherService,
              private studentService : StudentService,
              private router : Router) { }

  get formData(){
    return this.service.formData
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null){

    }
    this.service.formData = {
      name : "DemoTestStudent"
    }
  }

  async onSubmit(){
    await this.service.userAuthentication(this.formData.name)
    switch(this.service.loginCheck){
      case "student":
        this.studentService.setCurrentStudentName(this.formData.name)
        this.router.navigate(['/student'])
        break;
      case "teacher":
        this.teacherService.setTeacherName(this.formData.name)
        this.router.navigate(['/teacher'])
        break;
      case "admin":
        this.router.navigate(['/admins'])
        break;
      case "notValid":
        alert("This user is not available")
    }
  }

}
