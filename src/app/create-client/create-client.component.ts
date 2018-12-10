import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  Nombre: String = "";
  Documento: String = "";
  body: any ={};
  ButtonSend = true;
  Mensaje: String = "";
  createClient(){
    this.body.cliente={};
    this.body.cliente.Nombre= this.Nombre;
    this.body.cliente.Documento= this.Documento.toString();
    console.log("body"+this.body);
    this.ProductService.addClient('https://apiclienteus.herokuapp.com/clientes',this.body)
    .subscribe(
      hero=>{
        console.log(hero);
        this.Mensaje ="El cliente " +this.body.cliente.Nombre + " con Documento "+ this.body.cliente.Documento + " fue creado Correctamente";
        this.ButtonSend = true;
        this.body.cliente.Nombre= "";
        this.body.cliente.Documento= "";
      });
  }

  onEnter(){
    this.Mensaje ="";
    if(this.Nombre!==""&&this.Nombre!==null){
      if(this.Documento!==""&&this.Documento!==null){
        this.ButtonSend = false;
      }else{this.ButtonSend = true;}
    }else{this.ButtonSend = true;}
  }
  

  constructor(private ProductService: ProductosService) { 
    
  }

  ngOnInit() {
  }

}
