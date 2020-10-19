import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service : AdminService) { }

  get formData(){
    return this.service.formData
  }

  //This method get called everytime when you route into the respective component
  ngOnInit(): void {
    this.resetForm();
  }

  //Checks whether form manipulated or not 
  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      AID : 10,
      ANAME : '',
      INFORMATION : '',
      LOGINNAME : '',
      LOGINPASSWORD : '',
    }
  }


  //Respective HTML methods 
  onSubmit( form : NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postAdmin(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshAdminList();
    });
  }

  onUpdate( form : NgForm){
    this.updateRecord(form);
  }
  
  updateRecord(form: NgForm){
    this.service.putAdmin(form.value).subscribe(res => { 
      this.resetForm(form);
      this.service.refreshAdminList();
    });
  }

}
