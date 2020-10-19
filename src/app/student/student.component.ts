import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  info;
  dashboard;

  constructor() { }

  ngOnInit(): void {
    this.info = document.getElementById("info");
    this.dashboard = document.getElementById("dashboard"); 
    this.dashboard.style.display = "none"
  }

  navigationToggle(display : string){
    switch (display){
      case "info":
        this.info.style.display = "block"  
        this.dashboard.style.display = "none"
        break;
      case "dashboard":
        this.info.style.display = "none"  
        this.dashboard.style.display = "block"
        break;
    }
  }
}
