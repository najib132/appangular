import { RoutingModule } from './routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { ExerciceComponent } from './exercice/exercice.component';
import { PanelComponent } from './panel/panel.component';
import { FormatDirective } from './format.directive';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { FollowingComponent } from './following/following.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    ExerciceComponent,
    PanelComponent,
    FormatDirective,
    ContactComponent,
    SignupComponent,
    PostsComponent,
    FollowingComponent,
    NavbarComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [CoursesService,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
