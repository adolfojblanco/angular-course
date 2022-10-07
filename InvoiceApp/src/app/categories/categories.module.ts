import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './list/list.component';
import { CategoriesComponent } from './categories.component';


@NgModule({
  declarations: [
    ListComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
