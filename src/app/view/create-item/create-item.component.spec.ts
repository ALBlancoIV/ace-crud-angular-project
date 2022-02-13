import { HttpRequestService } from './../../services/http-request.service';
import { ItemService } from './../../services/item.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemComponent } from './create-item.component';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemComponent ],
      providers: [{
        ItemService,
        HttpRequestService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
