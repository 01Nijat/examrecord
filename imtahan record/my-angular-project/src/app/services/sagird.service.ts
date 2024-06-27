import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SagirdService {
  private baseUrl = 'http://localhost:5000/api/sagirdler';

  constructor(private http: HttpClient) { }

  getSagirdler(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createSagird(sagird: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, sagird);
  }

  updateSagird(id: number, sagird: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, sagird);
  }

  deleteSagird(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getSagirdById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
