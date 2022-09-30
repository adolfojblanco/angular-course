import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full',
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'companies',
    component: CompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
