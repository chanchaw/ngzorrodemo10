import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'app-drag-row',
  templateUrl: './drag-row.component.html',
  styleUrls: ['./drag-row.component.css']
})
export class DragRowComponent implements OnInit {

  tableStyle = [
    { fieldName:'name',caption:'name'},
    { fieldName:'age',caption:'age'},
    { fieldName:'address',caption:'address'}
  ]
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

  cols = [
    { fieldName:'name',title: 'Name',width: '180px' },
    { fieldName:'age',title: 'Age',width: '180px' },
    { fieldName:'address',title: 'Address',width: '200px' }
  ];


  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  onResize({ width }: NzResizeEvent, col: string): void {
    this.cols = this.cols.map(e => (e.title === col ? { ...e, width: `${width}px` } : e));
  }

}
