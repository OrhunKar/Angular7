import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

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
