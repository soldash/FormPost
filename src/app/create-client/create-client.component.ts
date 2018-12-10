import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  Nombre: String = "";
  Documento: String = "";
  body: any ={};
  createClient(){
    console.log("Nombre" + this.Nombre);
    console.log("Documento"+this.Documento);
    this.body.cliente={};
    this.body.cliente.Nombre= this.Nombre;
    this.body.cliente.Documento= this.Documento.toString();
    console.log("body"+this.body);
    this.ProductService.addClient(this.body).subscribe(hero=>{console.log(hero);});
  }

  

  constructor(private ProductService: ProductosService) { 
    
  }

  ngOnInit() {
  }

}
