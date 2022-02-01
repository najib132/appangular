import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormat]'
})
export class FormatDirective {
  @Input('appFormat') format:any;
//pour recuperer data d'input private el : ElementRef
  constructor(private el : ElementRef) { }

  @HostListener('blur') onBlur(){

    let name:string = this.el.nativeElement.value;

    if(this.format == "lowercase"){
    this.el.nativeElement.value = name.toLowerCase();
    }else{
      this.el.nativeElement.value = name.toUpperCase();
    }

  }

 



}
