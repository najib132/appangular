import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowingComponent } from './following/following.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path : "", 
        component:HomeComponent
      },
      {
        path : "followings", 
        component:FollowingComponent
      },
      {
        path : "followings/:id/:username", 
        component:ProfileComponent
      },
      {
        path : "posts", 
        component:PostsComponent
      },
      {
        path : "**", 
        component:PageNotFoundComponent 
      }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule {}
