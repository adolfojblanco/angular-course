import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients.component';
import { FormComponent } from './form.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [ClientsComponent, FormComponent, ListadoComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ClientsRoutingModule,
  ],
})
export class ClientsModule {}
