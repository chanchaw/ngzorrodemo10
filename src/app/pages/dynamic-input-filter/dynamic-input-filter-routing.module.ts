import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicInputFilterComponent } from './dynamic-input-filter.component';

const routes: Routes = [{
  path:'',component:DynamicInputFilterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicInputFilterRoutingModule { }
