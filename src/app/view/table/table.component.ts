import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit, AfterViewInit  {
  @Input('dataSource') dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'item', 'rate', 'quantity', 'amount'];

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
