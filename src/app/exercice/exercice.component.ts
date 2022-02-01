import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {
  @Input('valid') star:boolean = true;
  @Output() change = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  clickStar(){
    this.star = !this.star;
    this.change.emit(this.star);

  }

}
