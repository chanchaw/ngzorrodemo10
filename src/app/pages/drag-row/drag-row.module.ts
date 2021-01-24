import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { DragRowRoutingModule } from './drag-row-routing.module';
import { DragRowComponent } from './drag-row.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzResizableModule } from 'ng-zorro-antd/resizable';


@NgModule({
  declarations: [DragRowComponent],
  imports: [
    CommonModule,DragRowRoutingModule,
    NzTableModule,ScrollingModule,DragDropModule,NzResizableModule
  ]
})
export class DragRowModule { }
