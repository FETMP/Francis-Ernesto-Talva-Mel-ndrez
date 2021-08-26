import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

import {Poliza} from './poliza';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  private apiURL = "http://localhost:8000/api/person/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }

  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<Poliza[]>{
    return this.HttpClient.get<Poliza[]>(this.apiURL)
    .pipe(catchError(this.errorHandler)
  )
}

  create(poliza: any): Observable<Poliza>{
    return this.HttpClient.post<Poliza>(this.apiURL, JSON.stringify(poliza), this.httpOptions)
    .pipe(catchError(this.errorHandler)
    )
  }

update (idpoliza: number, poliza: any): Observable<Poliza> {
  return this.HttpClient.put<Poliza>(this.apiURL + idpoliza, JSON.stringify(poliza), this.httpOptions)
  .pipe(catchError(this.errorHandler)
  )
}

delete (idpoliza: number){
  return this.HttpClient.delete<Poliza>(this.apiURL + idpoliza, this.httpOptions)
  .pipe(catchError(this.errorHandler)
  )
}

errorHandler(error: { error: { message: string; }; status: any; message: any; }){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent){
    errorMessage= error.error.message;
//  }else{
//    errorMessage= Error Code: ${error.status}\nMessage: ${error.message};
  }
  return throwError(errorMessage);
 }
}