import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DynamicInputFilterRoutingModule } from './dynamic-input-filter-routing.module';
import { DynamicInputFilterComponent } from './dynamic-input-filter.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [DynamicInputFilterComponent],
  imports: [
    CommonModule,
    DynamicInputFilterRoutingModule,NzTableModule,NzDropDownModule,NzMenuModule,
    NzIconModule,NzInputModule,NzButtonModule,FormsModule,ReactiveFormsModule
  ]
})
export class DynamicInputFilterModule { }
