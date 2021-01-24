import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragRowComponent } from './drag-row.component';

const routes: Routes = [{
  path:'',component:DragRowComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragRowRoutingModule { }
