import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  /**
   * Nuevo formulario
   */
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: ['M', Validators.required],
    terminos: [false, Validators.required],
  });

  /**
   * Objeto persona
   */
  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Usamos reset en vez de set para que no nos de un error al establecer los valores
    this.miFormulario.reset({
      ...this.persona,
      terminos: false,
    });

    // Esto para los cambios sincronos
    this.miFormulario.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  guardar() {
    const form = { ...this.miFormulario.value };
    console.log(form);
  }
}
