import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, tap,  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl;
  // Puede ser nulo o undefined
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) {}

  verificaAutenticacion(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) {
      return false;
    }
    return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`)
    .pipe(
      map(auth => {

    }));
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.apiUrl}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }
}
