import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [{ id:1,name:'najib'},{ id:2,name:'ali'},{ id:3,name:'said'},{ id:4,name:'abdou'}];

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(f:any){
    console.log(f.value);

  }

}
