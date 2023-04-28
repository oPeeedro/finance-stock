import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../styles.css']
})
export class DashboardComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
  }

}