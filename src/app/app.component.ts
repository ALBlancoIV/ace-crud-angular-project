import { ItemService } from './services/item.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReportService } from './services/report-services.service';


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

  @ViewChild('tableView') tableView!: ElementRef;

  constructor(
    private itemService: ItemService,
    private reportService: ReportService,

  ) {
  }

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
    this.itemService.amountSum.subscribe((res: []) => {
      this.amountSum = res;
    });
  }

  printTable() {
    this.reportService.printTable(this.tableData, this.tableView, this.amountSum);
  }
}
