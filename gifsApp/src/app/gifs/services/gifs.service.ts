import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'e45p2k12of23GHpX4sirf3pJyI4A38Ax';
  private _historial: string[] = [];

  // TODO: Cambiar any por su tipo
  public resultados: any[] = [];

  // Lo hacemos asi, para rmper la referencia al arreglo principal
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    // si no incluye la busqueda en el arreglo lo argamos
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); // Solo usamos 10 elementos para el arreglo.
    }

    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=e45p2k12of23GHpX4sirf3pJyI4A38Ax&q=Dragon Ball z&limit=10'
      )
      .subscribe((resp: any) => {
        this.resultados = resp.data;
      });
  }
}
