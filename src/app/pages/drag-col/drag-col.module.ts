import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DragColRoutingModule } from './drag-col-routing.module';
import { DragColComponent } from './drag-col.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResizableModule } from 'ng-zorro-antd/resizable';


@NgModule({
  declarations: [DragColComponent],
  imports: [
    CommonModule,DragColRoutingModule,
    DragDropModule,ScrollingModule,NzTableModule,NzResizableModule
  ]
})
export class DragColModule { }
