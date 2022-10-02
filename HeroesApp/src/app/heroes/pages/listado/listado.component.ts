import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/heroe';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe((res) => (this.heroes = res));
  }
}
