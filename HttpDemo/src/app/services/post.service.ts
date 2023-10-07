import { NotFoundError } from './../common/not-found-error';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { Observable, catchError, of, throwError } from 'rxjs';
import { AppError } from '../common/app.error';
import { BadInput } from '../common/bad-input';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url :string= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _httpService: HttpClient) { }

  getPosts(){
    return this._httpService.get(this.url)
            .pipe( catchError( (error) => this.handleErrors(error)));
  }

  createPost(body: any){
    return this._httpService.post( this.url , body )
    .pipe( catchError(error => this.handleErrors(error)));
  }

  updatePost( id: number, body: any){
    return this._httpService.patch(this.url+'/'+id,body);
  }

  deletePost(id: number) {
    return this._httpService.delete(this.url+'/'+id).pipe(
      catchError( error => this.handleErrors(error))
    );
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
