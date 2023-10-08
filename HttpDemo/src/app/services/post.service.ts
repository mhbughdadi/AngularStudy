import { NotFoundError } from './../common/not-found-error';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

import { Observable, catchError, of, throwError } from 'rxjs';
import { AppError } from '../common/app.error';
import { BadInput } from '../common/bad-input';
import { JsonPipe } from '@angular/common';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor( _httpService: HttpClient) { 
    super( 'https://jsonplaceholder.typicode.com/posts', _httpService);
  }

} 
