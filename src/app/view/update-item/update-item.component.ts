import { ItemService } from './../../services/item.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.sass'],
})
export class UpdateItemComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  listOfIds: any;

  itemUpdate = this.formBuilder.group({
    id: '',
    item: '',
    rate: '',
    quantity: '',
  });

  ngOnInit(): void {
    this.getListOfIds();
  }

  getListOfIds() {
    this.itemService.listOfIds.subscribe((list) => {
      this.listOfIds = list;
    });
  }

  onSubmit() {
    const { id, item, rate, quantity } = this.itemUpdate.value;
    if (id !== '' && (item != '' || rate != '' || quantity != '') ) {
      this.itemService
      .updateItem(id, item, rate, quantity)
      .pipe(take(1))
      .subscribe((res) => {
        this.itemService.getItemTable();
        this.itemService.getListOfIds();
      });
    }

  }
}
