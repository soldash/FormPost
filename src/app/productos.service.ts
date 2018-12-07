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
    //return this.http.get<product[]>('http://localhost:18080/productos');
    return this.http.get<product[]>('http://54.166.167.16:8080/productos');
  }
}
