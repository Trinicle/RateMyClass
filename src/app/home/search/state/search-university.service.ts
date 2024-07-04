import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map } from 'rxjs';
import { University } from '@app/models/university.model';
import { SearchUniversityStore } from './search-university.store';

@Injectable({
  providedIn: 'root',
})
export class SearchUniversityService {
  private url: string = 'http://localhost:5000/api/universities';

  constructor(private http: HttpClient, private searchUniversityStore: SearchUniversityStore) {}

  get(university: string = '', amount: number = 0) {
    if (!university) {
      return EMPTY;
    }

    this.reset();
    return this.http
      .get<University[]>(
        `${this.url}`.concat(
          `?name=${encodeURIComponent(university)}`,
          amount !== 0 ? `&amount=${amount}` : ``
        ),
        { observe: 'response' }
      )
      .pipe(
        map((response) => 
          response.body?.map(item => {
            const mappedItem = {
              id: item.id,
              name: item.name
            };
            return this.searchUniversityStore.update(state => ({
              items: [...state.items, mappedItem]
            }))
          }
          ))
      );
  }

  reset() {
    this.searchUniversityStore.reset();
  }
}
