import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.route.navigate(['followings',23,'najib'],{ 
      queryParams: { page:1 , type:'admin' }
     })

  }

}
