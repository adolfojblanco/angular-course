import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Strangin', Validators.required],
      ],
      Validators.required
    ),
  });

  // esto es para agregar un nuevo favorito
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  /**
   * Obtener arreglo del formulario favorito
   */
  get favoritosArr() {
    // Con esto le decimos a TS que es un FormArray, para que no nos de errores en el html.
    return this.miFormulario.controls['favoritos'] as FormArray;
  }

  /**
   * Agrega un nuevo favorito
   */
  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  /**
   * Eliminar un favorito del arreglo
   */
  eliminarFavorito(i: number) {
    console.log(i);
    // Remueve un objeto de la posicion que le pasemos el indice.
    this.favoritosArr.removeAt(i);
  }

  /**
   * Recibe el nombre del campo del formulario para validarlo
   * @param campo nombre del campo.
   * @returns true or false
   */
  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  /**
   * Guarda un formulario
   */
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

    // Reinicia el formulario
    //this.miFormulario.reset();
  }
}
