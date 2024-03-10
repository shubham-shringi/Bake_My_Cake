import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CakeRequest } from '../models/cakeRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeRequestService {

  constructor(private http: HttpClient) { }

  URL: string = "http://localhost:3000/cakeRequests";

  getAllCakeRequests(): Observable<Array<CakeRequest>> {
    return this.http.get<Array<CakeRequest>>(`${this.URL}`);
  }

  saveCakeRequest(cakeRequest?: CakeRequest): Observable<CakeRequest> {
    return this.http.post<CakeRequest>(`${this.URL}`, cakeRequest)
  }
}