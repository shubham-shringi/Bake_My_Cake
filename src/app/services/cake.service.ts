import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  url: string = 'http://localhost:3000/cakes';

  constructor(private http: HttpClient) {}

  getCakes(): Observable<Array<Cake>> {
    return this.http.get<Cake[]>(this.url);
  }

  getCake(id?: number): Observable<Cake> {
    return this.http.get<Cake>(`${this.url}/${id}`);
  }
}
