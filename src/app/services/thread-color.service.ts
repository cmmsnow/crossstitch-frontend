import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ThreadColor} from '../ThreadColor';

@Injectable({
  providedIn: 'root'
})
export class ThreadColorService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  /** Save selected ThreadColor from the components */


  /** GET ThreadColors from the server */
  getComments(): Observable<ThreadColor[]> {
    return this.http.get<ThreadColor[]>(`http://localhost:8080/threads/allthreads`);
  }

}
