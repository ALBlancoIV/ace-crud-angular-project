import { ItemService } from './services/item.service';
import { Component, OnInit } from '@angular/core';

const FORM_STATUS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'ace-crud-test';
  formStatus: string = FORM_STATUS.CREATE;
  tableData: any;
  amountSum: any;

  constructor(private itemService: ItemService) {}

  get showUpdate() {
    return this.formStatus === FORM_STATUS.UPDATE;
  }

  get showCreate() {
    return this.formStatus === FORM_STATUS.CREATE;
  }

  get showDelete() {
    return this.formStatus === FORM_STATUS.DELETE;
  }

  ngOnInit(): void {
    this.getTabledata();
    this.calculateSum();
  }

  getTabledata() {
    this.itemService.tableData.subscribe((data) => {
      this.tableData = data;
    });
  }

  changeForm(formStatus: string) {
    this.formStatus = formStatus;
  }

  calculateSum() {
    this.itemService.amountSum.subscribe((res) => {
      this.amountSum = res;
    });
  }
}
