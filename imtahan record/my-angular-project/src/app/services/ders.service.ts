import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DersService {
  private baseUrl = 'http://localhost:5000/api/dersler';

  constructor(private http: HttpClient) { }

  getDersler(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createDers(ders: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, ders);
  }

  updateDers(id: number, ders: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, ders);
  }

  deleteDers(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getDersById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
