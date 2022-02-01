import { UsernameValidator } from './username.validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  formR = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      UsernameValidator.pasdespace
    ]),
    password : new FormControl()
  });

  get username(){
    return this.formR.get('username');
  }

  

}
