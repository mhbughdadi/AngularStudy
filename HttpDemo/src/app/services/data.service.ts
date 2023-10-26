import { NotFoundError } from './../common/not-found-error';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, NgModule } from '@angular/core';

import { Observable, catchError, of, throwError,map } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { JsonPipe } from '@angular/common';
import { AppError } from '../common/app.error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    // 0220487603
  constructor(@Inject(String) private url: string, private _httpService: HttpClient) { 
    this.url = url; 
    this._httpService = _httpService 
  }

  getAll(){
    return this._httpService.get(this.url)
            .pipe( 
                map((response)=> JSON.parse( JSON.stringify( response) )),
                catchError( (error) => this.handleErrors(error))
            );
  }

  create(resource: any){

    return throwError(() =>new AppError("Not Added"));
    // return this._httpService.post( this.url , resource )
    // .pipe( catchError(error => this.handleErrors(error)));
  }

  update( id: number, resource: any){
    return this._httpService.patch(this.url+'/'+id,resource);
  }

  delete(id: number) {
    return throwError(()=>new AppError("Cannot be deleted"));
    // return this._httpService.delete(this.url+'/'+id).pipe(
    //   catchError( error => this.handleErrors(error))
    // );
  }

  handleErrors(error:HttpErrorResponse) {

    if(error.status === 404){
      console.log('this post may be deleted.');
      return throwError( () => new NotFoundError());    
    } else if(error.status === 400 ) {
      console.log('Request not correct..');
      return throwError( ()=> new BadInput(error));
    }else{
      return throwError( () => new Error('Something error happened.'));
    }
  }
} 
