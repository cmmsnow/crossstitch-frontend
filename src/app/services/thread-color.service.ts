import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ThreadColor} from '../models/ThreadColor';

@Injectable({
  providedIn: 'root'
})
export class ThreadColorService {
  selectedThreadColor!: Observable<ThreadColor>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  /** Save selected ThreadColor from the components */
  selectThreadColor(threadColor: ThreadColor): void {
    this.selectedThreadColor = new BehaviorSubject(threadColor);
  }

  /** Get selected ThreadColor */
  getselectedThreadColor(): Observable<ThreadColor> {
    return this.selectedThreadColor;
  }

  /** GET ThreadColors from the server */
  getThreadColors(): Observable<ThreadColor[]> {
    return this.http.get<ThreadColor[]>(`http://localhost:8080/threads/allthreads`);
  }

}
