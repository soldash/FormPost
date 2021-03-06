import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { product } from './product'
import { clientes } from './clientes'
import { factura } from './factura'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http : HttpClient) { 

  }
  getData(){
    return this.http.get<product>('http://142.93.120.255:3789/pos/api/products');
  }
  getDataClientes(){
    return this.http.get<clientes[]>('https://apiclienteus.herokuapp.com/clientes');
  }
  addClient (url ,hero){
    return this.http.post<clientes[]>(url, hero);
  }
  addBill (url ,hero){
    return this.http.post<factura>(url, hero);
  }

}
