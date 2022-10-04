import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  private apiUrl: string = 'http://localhost:8082/api';
  private htppHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Client[]> {
    const url = `${this.apiUrl}/clients`;
    return this.http.get<Client[]>(url);
  }

  create(client: Client): Observable<Client> {
    return this.http
      .post<Client>(`${this.apiUrl}/clients`, client, {
        headers: this.htppHeaders,
      })
      .pipe(
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }
}
