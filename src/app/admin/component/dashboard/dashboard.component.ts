import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // let acc:any = localStorage.getItem('admin')
    // if(!acc){
    //   this.router.navigate(['/loginAdmin'])
    // }
    
  }

}
