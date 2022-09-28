import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './interfaces/client.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private _urlEndPoint: string = 'http://localhost:8080/api/clients';
  public clients: Client[] = [];

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    console.log('Me ejecute');
    return this.http
      .get<Client[]>(this._urlEndPoint)
      .pipe(map((response) => response));
    this.clients = response;
  }
}
