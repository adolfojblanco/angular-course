import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(0),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencia: [, [Validators.required, Validators.min(0)]],
  });

  // FormBuilder es un servicio por eso lo inyectamos
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // Para las validaciones del formulario.
  // Enviamos el nombre en la funcion, asi no lo repetimos
  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    //console.log(this.miFormulario.value)

    // Si el forrmulario es invalido, no continuamos
    if (this.miFormulario.invalid) {
      // Con esto marcas, los campos como si fueran tocados
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
  }
}
