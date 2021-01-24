import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColWidthComponent } from './col-width.component';

const routes: Routes = [{
  path:'',component:ColWidthComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColWidthRoutingModule { }
