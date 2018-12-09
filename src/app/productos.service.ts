import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { product } from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http : HttpClient) { 

  }
  getData(){
    return this.http.get<product>('http://142.93.120.255:3789/pos/api/products');
  }
}
