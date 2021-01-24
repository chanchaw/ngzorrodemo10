import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'dragRow', loadChildren: () => import('./pages/drag-row/drag-row.module').then(m => m.DragRowModule) },
  { path: 'dragCol', loadChildren: () => import('./pages/drag-col/drag-col.module').then(m => m.DragColModule) },
  { path: 'colWidth', loadChildren: () => import('./pages/col-width/col-width.module').then(m => m.ColWidthModule) },
  { path: 'dFilter', loadChildren: () => import('./pages/dynamic-input-filter/dynamic-input-filter.module').then(m => m.DynamicInputFilterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
