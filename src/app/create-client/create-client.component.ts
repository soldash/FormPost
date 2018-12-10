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
  ButtonSend = true;
  createClient(){
    this.body.cliente={};
    this.body.cliente.Nombre= this.Nombre;
    this.body.cliente.Documento= this.Documento.toString();
    console.log("body"+this.body);
    this.ProductService.addClient('https://apiclienteus.herokuapp.com/clientes',this.body).subscribe(hero=>{console.log(hero);});
  }

  onEnter(){
    console.log("ENtro!!!")
    console.log("Nombre " + this.Nombre);
    console.log("Documento "+this.Documento);
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
