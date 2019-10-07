import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }

  createWork(data) {
    const url = `http://127.0.0.1:8083/workProfiles`;
    return this.http.post(url, data)
      .pipe(
        map((res: Response) => res),
        map(body => body),
        catchError((body) => of(body))
      );
  }
}
