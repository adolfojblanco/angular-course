import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interface/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string = '';
  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesServices
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));

    console.log(this.termino);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    if (!heroe) {
      this.heroeSeleccionado = undefined;
      return;
    }

    this.termino = heroe.superhero;

    this.heroesServices
      .getHeroe(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
