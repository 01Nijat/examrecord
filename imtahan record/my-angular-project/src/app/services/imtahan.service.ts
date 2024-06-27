import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImtahanService {
  private baseUrl = 'http://localhost:5000/api/imtahanlar';

  constructor(private http: HttpClient) { }

  getImtahanlar(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createImtahan(imtahan: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, imtahan);
  }

  updateImtahan(id: number, imtahan: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, imtahan);
  }

  deleteImtahan(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getImtahanById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
