import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  post = {
    title : 'lorem ',
    valid : false
  }

  HellOutput(star:boolean){
     console.log('hello output : ', star);
  }
  
}

