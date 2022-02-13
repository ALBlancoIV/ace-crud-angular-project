import {
  HttpClient,
  HttpParams,
  HttpParamsOptions,
  HttpResponseBase,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, Observable, catchError } from 'rxjs';
import { Item } from '../model/model';

const itemUrls = {
  base: 'http://localhost:5000/item',
  itemById: 'http://localhost:5000/item/{1}',
  listOfIds: 'http://localhost:5000/item/idList',
};

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) {}

  // get
  getRequest(id?: string): Observable<Item[]> {
    let url = itemUrls.base;
    if (id != null) {
      url = itemUrls.itemById.replace('{1}', id);
    }

    return this.httpClient.get(url) as Observable<Item[]>;
  }

  getListOfId() {
    let url = itemUrls.listOfIds;
    return this.httpClient.get(url);
  }

  // post
  postRequest(item: string, rate: number, quantity: number) {
    const body = { item, rate, quantity };
    return this.httpClient.post(itemUrls.base, body);
  }

  // put

  // delete
  deleteRequest(id: string) {
    return this.httpClient.delete(itemUrls.itemById.replace('{1}', id));
  }

  updateRequest(id: string, item: string, rate: number, quantity: number) {
    const url = itemUrls.itemById.replace('{1}', id);
    const body = { item, rate, quantity};
    return this.httpClient.put(url, body);
  }
}
