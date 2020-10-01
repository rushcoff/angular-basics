import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface FetchFlatsParams {
  [key: string]: string;
}

export interface Flat {
  id: number;
  address: string;
  square: number;
  price: number;
  category: { id: number; name: string };
  city: { id: number; name: string };
}

export interface FlatResponse {
  results: Flat[];
}

@Injectable({
  providedIn: 'root',
})
export class FlatsService {
  private domen = 'https://www.sdvor.com';

  constructor(private http: HttpClient) {}

  fetchFlats(params: FetchFlatsParams = {}): Observable<Flat[]> {
    const endpoint = `${this.domen}/api/common/flats/`;

    return this.http
      .get(endpoint, {
        params: new HttpParams({
          fromObject: params,
        }),
      })
      .pipe(
        map((data: FlatResponse) => data.results || []),
        catchError((err) => {
          alert(`При выполнении запроса произошла ошибка: ${err.message}`);
          return throwError(err);
        })
      );
  }
}
