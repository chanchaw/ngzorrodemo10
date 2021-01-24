import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-input-filter',
  templateUrl: './dynamic-input-filter.component.html',
  styleUrls: ['./dynamic-input-filter.component.css']
})
export class DynamicInputFilterComponent implements OnInit {

  tableDataDisplay:Employee[] = [];
  tableData:Employee[] = [
    { sid:'1001',name:'张三',gender:'男',address:'酆都城' },
    { sid:'1002',name:'李四',gender:'男',address:'酆都城' },
    { sid:'1101',name:'春野樱',gender:'女',address:'tokyo' },
    { sid:'1102',name:'二柱子',gender:'男',address:'osaka' },
  ]

  columnConfig:ColumnConfig[]  = [
    { fieldName:'sid',caption:'工号',width:'70px',inputFilter:true },
    { fieldName:'name',caption:'姓名',width:'90px',inputFilter:true },
    { fieldName:'gender',caption:'性别',width:'60px',inputFilter:false },
    { fieldName:'address',caption:'地址',width:'100px',inputFilter:false }
  ]

  searchValue = '';
  visible = false;

  constructor() { 
    this.tableDataDisplay = [...this.tableData];
  }

  ngOnInit(): void {
  }

  reset(fieldName:string): void {
    this.searchValue = '';
    this.search(fieldName);
  }

  search(fieldName:string): void {
    console.log('当前正在过滤的字段是：' + fieldName + '，搜索的值是：' + this.searchValue);
    this.visible = false;
    this.tableDataDisplay = this.tableData.filter((item: Employee) => item[fieldName].indexOf(this.searchValue) !== -1);
    console.log(this.tableDataDisplay);
  }

}


export class Employee{
  sid:string;
  name:string;
  gender:string;
  address:string;
}

export class ColumnConfig {
  fieldName:string;
  caption:string;
  width:string;
  inputFilter:boolean;
}