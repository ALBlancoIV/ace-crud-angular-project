import { ItemService } from './../../services/item.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.sass'],
})
export class DeleteItemComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  listOfIds: any;

  itemDelete = this.formBuilder.group({
    id: '',
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
    const { id } = this.itemDelete.value;
    if (id !== '') {
      this.itemService
        .deleteItem(id)
        .pipe(take(1))
        .subscribe((response) => {
          this.itemService.getItemTable();
          this.itemService.getListOfIds();
        });
    }
  }
}
