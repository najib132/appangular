import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {
  mylimit:any;
  transform(body: string, limit?: number): any {
    if(!body){
       return null;
    }
    this.mylimit = (limit) ? limit : 30;
    return body.substr(0, this.mylimit) + '...';
  }

}
