import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heroe';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Obtener Heroes
   * @returns heroes[]
   */
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`);
  }

  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${termino}&limit=6`);
  }
}
