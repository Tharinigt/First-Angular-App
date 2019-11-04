import { Component } from '@angular/core';

interface UserDetail {
  i?: number;
  name: string;
  email: string;
  isSelected?: boolean;
  length?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arr: UserDetail[] = [];
  masterSelected: boolean;
  checkedList: any;
  constructor() {
    this.masterSelected = false;
    this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.arr.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].isSelected)
        this.checkedList.push(i);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

  deleteRow(indexFromHtml) {
    var selected = new Array();
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].isSelected) {
        selected.push(i);
      }
    }
    for (var i = selected.length - 1; i >= 0; i--) {
      this.arr.splice(selected[i], 1);
      // this.arr.map((value, index) => {
      //   if (indexFromHtml === index) {
      //     this.arr.splice(indexFromHtml, 1)
      //   }
      // })
    }
  }


  login(value) {
    console.log(value)
    this.arr.push({
      name: value.name,
      email: value.email
    })
  }

  // openModal(id: string) {
  // }

  // closeModal(id: string) {

  // }

  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

}
