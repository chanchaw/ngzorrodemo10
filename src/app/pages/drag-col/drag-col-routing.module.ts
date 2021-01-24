import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragColComponent } from './drag-col.component';

const routes: Routes = [{
  path:'',component:DragColComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragColRoutingModule { }
