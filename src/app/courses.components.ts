import { CoursesService } from './courses.service';
import { Component } from "@angular/core";
@Component({
    selector: 'courses',
    template:   `
            <div class="container"> 
                <ul class="list-group"> 
                  <li class="list-group-item">{{ course.title }}</li>
                  <li class="list-group-item">{{ course.avis | number : '1.2-2' }}</li>
                  <li class="list-group-item">{{ course.participants }}</li>
                  <li class="list-group-item">{{ course.prix | currency: 'MAD' }}</li>
                  <li class="list-group-item">{{ course.publicationDate | date }}</li>
                </ul>
            </div>

                `
})

export class CoursesComponent {
    
    course = {
        title : 'Formation react',
        avis  : '44587.9874',
        participants : 111,
        prix  : '3000' ,
        publicationDate : new Date(2021, 11, 22)
    };
   


}