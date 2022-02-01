import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id : number=0;
  username:string='';
  page:number=0;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id       = +this.route.snapshot.paramMap.get('id')!;
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.page     = +this.route.snapshot.queryParamMap.get('page')!;

  }

}
