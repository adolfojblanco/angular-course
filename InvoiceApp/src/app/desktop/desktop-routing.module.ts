import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopModule } from './desktop.module';
import { DesktopComponent } from './desktop.component';

const routes: Routes = [
  {
    path: '',
    component: DesktopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesktopRoutingModule {}
