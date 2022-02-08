import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.sass'],
})
export class CreateItemComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {}

  itemCreation = this.formBuilder.group({
    id: '',
    item: '',
    rate: '',
    quantity: '',
  });

  onSubmit() {
    const { item, rate, quantity } = this.itemCreation.value;
    this.itemService
      .addItem(item, rate, quantity)
      .pipe(take(1))
      .subscribe(() => {
        this.itemService.getItemTable();
        this.itemService.getListOfIds();
      });
  }
}
