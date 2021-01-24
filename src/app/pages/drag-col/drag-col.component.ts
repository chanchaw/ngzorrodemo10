import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray,CdkDragStart } from '@angular/cdk/drag-drop';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-drag-col',
  templateUrl: './drag-col.component.html',
  styleUrls: ['./drag-col.component.css']
})
export class DragColComponent implements OnInit {


  displayedColumns = [
    { fieldName:'name',caption:'Name',index:0},
    { fieldName:'age',caption:'Age',index:1},
    { fieldName:'address',caption:'Address',index:2}
  ];

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];


  width = 400;
  height = 200;
  id = -1;
  disabled = false;

  onResize({ width, height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.width = width!;
      this.height = height!;
    });
  }



  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
