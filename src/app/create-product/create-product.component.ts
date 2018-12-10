import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  // Model 

  product: Product;
  URL: string = "http://142.93.120.255:3789/pos/api/products";


  constructor(private http : HttpClient) { 
    this.product = new Product();
  }

  ngOnInit() {
    console.log('initialization');
  }

  addProductMethod (product: Product): Observable<Product> {
    return  this.http.post<Product>(this.URL, product).pipe(
      map((res) => res))
  }


  addProduct(){
    console.log('heyy there' + JSON.stringify(this.product));

      
    this.addProductMethod(this.product)
    .subscribe(result => console.log("whats up dude" + JSON.stringify(result)));

  }


}
