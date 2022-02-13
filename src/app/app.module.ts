import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { HttpRequestService } from './services/http-request.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { ReportService } from './services/report-services.service';
import { ItemService } from './services/item.service';
import { TableComponent } from './view/table/table.component';
import { CreateItemComponent } from './view/create-item/create-item.component';
import { UpdateItemComponent } from './view/update-item/update-item.component';
import { DeleteItemComponent } from './view/delete-item/delete-item.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CreateItemComponent,
    UpdateItemComponent,
    DeleteItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [HttpRequestService, ReportService, ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
