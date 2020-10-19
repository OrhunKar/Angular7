import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  constructor(private service : AdminService, private router : Router) { }

  get loginData(){
    return this.service.loginData
  }

  //This method get called everytime when you route into the respective component
  ngOnInit(): void {
    this.resetForm();
  }

  //This method checks if there is an input ready in the form
  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.loginData = {
      LOGINNAME : '',
      LOGINPASSWORD : '',
    }
  }

  //This suppose to work for login, it is not working as intented atm
  /*
  onSubmit( form : NgForm){
    
    this.checkRecord(form);
  }
  */


  onSubmit(){
    this.router.navigateByUrl('/admins')
  }


  checkRecord(form: NgForm){
    this.service.postAdmin(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshAdminList();
    });
  }

}
