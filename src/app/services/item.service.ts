import { HttpRequestService } from './http-request.service';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';

let tableData: PeriodicElement[] = [
  { id: '1', item: 'Hydrogen', rate: 1.0079, quantity: 1000 },
  { id: '2', item: 'Helium', rate: 4.0026, quantity: 2000 },
  { id: '3', item: 'Lithium', rate: 6.941, quantity: 300 },
  { id: '4', item: 'Beryllium', rate: 9.0122, quantity: 199 },
  { id: '5', item: 'Boron', rate: 10.811, quantity: 188 },
  { id: '6', item: 'Carbon', rate: 12.0107, quantity: 100 },
  { id: '7', item: 'Nitrogen', rate: 14.0067, quantity: 1000 },
  { id: '8', item: 'Oxygen', rate: 15.9994, quantity: 1000 },
  { id: '9', item: 'Fluorine', rate: 18.9984, quantity: 145 },
  { id: '10', item: 'Neon', rate: 20.1797, quantity: 167 },
];

export interface PeriodicElement {
  id: string;
  item: string;
  rate: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private _tableData = new BehaviorSubject<PeriodicElement[]>([]);
  private _amountSum = new BehaviorSubject<number>(0);
  private _listOfIds = new BehaviorSubject<[]>([]);

  constructor(private httpRequestService: HttpRequestService) {
    this.getItemTable();
    this.calculateSum();
    this.getListOfIds();
  }

  public get listOfIds(): Observable<any> {
    return this._listOfIds;
  }
  public set listOfIds(value: any) {
    this._listOfIds.next(value);
  }

  get amountSum(): Observable<any> {
    return this._amountSum;
  }

  set amountSum(value: any) {
    this._amountSum.next(value);
  }

  get tableData(): Observable<any> {
    return this._tableData;
  }

  set tableData(value: any) {
    this._tableData.next(value);
  }

  getItemTable() {
    this.httpRequestService.getRequest().subscribe((res) => {
      this.tableData = res as PeriodicElement[];
    });
  }

  getListOfIds() {
    this.httpRequestService.getListOfId().subscribe((res) => {
      this.listOfIds = res;
    });
  }

  addItem(item: string, rate: number, quantity: number) {
    return this.httpRequestService.postRequest(item, rate, quantity);
  }

  deleteItem(id: string) {
    return this.httpRequestService.deleteRequest(id);
  }

  updateItem(id: string, item: string, rate: number, quantity: number) {
    return this.httpRequestService.updateRequest(id, item, rate, quantity);
  }

  calculateSum() {
    this.tableData.subscribe((item: PeriodicElement[]) => {
      let sum = 0;
      item.map((row) => {
        let amount = row.quantity * row.rate;
        sum += amount;
      });
      this.amountSum = sum;
    });
  }
}
