import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroe';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      descripcion: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      descripcion: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroeService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroeService.getHeroe(id)))
        .subscribe((heroe) => (this.heroe = heroe));
    }
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actualizamos porque existe un id
      this.heroeService
        .actualizarHeroe(this.heroe)
        .subscribe((res) => ['/heroes', this.heroe.id]);
    } else {
      // Creamos un registro
      this.heroeService
        .agregarHeroe(this.heroe)
        .subscribe((res) => ['/heroes/editar', this.heroe.id]);
    }
  }

  borrarHeroe() {
    this.heroeService
      .eliminarHeroe(this.heroe.id!)
      .subscribe((res) => this.router.navigate(['/heroes']));
  }
}
