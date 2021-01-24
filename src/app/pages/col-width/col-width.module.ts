import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColWidthRoutingModule } from './col-width-routing.module';
import { ColWidthComponent } from './col-width.component';


@NgModule({
  declarations: [ColWidthComponent],
  imports: [
    CommonModule,
    ColWidthRoutingModule
  ]
})
export class ColWidthModule { }
