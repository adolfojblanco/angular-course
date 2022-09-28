import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//**Rutas del app */
const routes: Routes = [
  {
    // Ruta principal de la aplicación
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    // Si no existe lo renviamos al inicio
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  // Debemos pasarselo al routerModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
