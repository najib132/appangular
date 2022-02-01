import { GithupFollowingService } from './../services/githup-following.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  following:any[''];
  constructor(private githupFollowing : GithupFollowingService) { }
 
  ngOnInit(): void {
    this.getFollowing();
  }

  getFollowing(){
     this.githupFollowing.getAll()
      .subscribe((following) => this.following = following)
      
  }

}
