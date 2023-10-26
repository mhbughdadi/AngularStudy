import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable,catchError,map ,pipe, throwError} from "rxjs";
import { PostModel } from "../commons/post.model";
import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn:'root'
// })
export class DataService {

    constructor(private _http: HttpClient){
    
        this._http.get('/all').pipe(
            map( (response)=>{
                    JSON.parse(response.toString());
                }
            ),
            catchError( (error)=>{
                throw error;
            })
        )
    }
}