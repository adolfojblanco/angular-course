import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  // Con el signo de admiracion podemos decirle que ppuede ser nulo.
  pais!: Country;

  // ActivatedRoute Nos activa para poder suscribiros a cualquier cambio del URL
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
        console.log(pais);
        this.pais = pais;
      });
    });
  }
}
