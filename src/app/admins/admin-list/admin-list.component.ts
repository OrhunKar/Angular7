import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/admin.model';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor(private service : AdminService) { }

  get adminList(){
    return this.service.adminList
  }

  ngOnInit() {
    this.service.refreshAdminList();
  }

  populateForm(admin : Admin){
    this.service.formData = Object.assign({}, admin);
  }

  onDelete(id : number){
    if(confirm("Are you sure to delete this Admin?"))
    this.service.deleteAdmin(id).subscribe(res=>{
      this.service.refreshAdminList();
    })
  }


}
