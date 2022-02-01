import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('https://jsonplaceholder.typicode.com/posts') private url: string, private http: HttpClient) {
   }

   getAll(){
     return this.http.get(this.url). 
     pipe(map(response => response),
      catchError(
        this.handleError
      )         
      )}  

   create(resource:any){
    return this.http.post(this.url, resource).
    pipe(map(response => response),
      catchError(
        this.handleError
      )         
      )}  

   update(resource:any){
     return this.http.put(this.url +"/"+ resource.id ,resource).
      pipe(map(response => response),
        catchError(
          this.handleError
        )         
        )}  

   delete(resource:any){
     return this.http.delete(this.url + "/" + resource.id).
     pipe(map(response => response),
      catchError(
        this.handleError
      )         
      )}  
  

   private handleError(error : Response){
      if(error.status===404){
        return throwError(new NotFoundError(error));
      }
      if(error.status===400){
        return throwError(new BadInput(error))
      }
      return throwError(new AppError(error))
    }
}
