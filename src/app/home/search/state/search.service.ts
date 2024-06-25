import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, of, throwError } from 'rxjs';
import { GetMupltipleResponse } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string = 'http://localhost:5000/api/universities'

  constructor(private http: HttpClient) { }

  get(university: string = '', amount: number = 0) {
    if (!university) {
      return of({ count: 0, result: [] });
    }
    return this.http.get<GetMupltipleResponse>(
      `${this.url}`.concat(
        `?name=${encodeURIComponent(university)}`,
        amount !== 0 ? `&amount=${amount}` : ``
      ),
      { observe: 'response' }
    )
      .pipe(
        map((response) => response.body || { count: 0, result: [] }),
        catchError((error: HttpErrorResponse) => {
          if(error.status === 404) {

            return of({ count: 0, result: [] });
          } else {
            return throwError(() => error);
          }
        })
      )
  }
}
