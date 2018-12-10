import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formPos';
  CompraVisibility = true;
  AProductoVisibility = true;
  ACLienteVisibility = false;

  showCompra(){
    this.CompraVisibility=!this.CompraVisibility;
    this.AProductoVisibility = true;
    this.ACLienteVisibility = true;
  }
  showProducto(){
    this.AProductoVisibility=!this.AProductoVisibility;
    this.CompraVisibility = true;
    this.ACLienteVisibility = true;
  }
  showCliente(){
    this.ACLienteVisibility=!this.ACLienteVisibility;
    this.CompraVisibility = true;
    this.AProductoVisibility = true;
    console.log(this.ACLienteVisibility);
  }


}
