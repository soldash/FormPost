import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: any[] = [];
  Cliente: any = {};
  //products: any[] = [{"nombre" :"Pasta","precio":2000}, {"nombre" :"Frijol","precio":4000},{"nombre" :"Jabon","precio":1500},{"nombre" :"Arroz","precio":900}];
  selectedProduct: any = {};
  selectedClient: any = {};
  products = [];
  clients = [];
  Total = 0;

  ButtonAdd = true;
  ButtonBuy = true;

  onChannge(client) {
    for (var i = 0; i < this.clients.length; i++) {
      if (this.clients[i].Nombre == client) {
        this.Cliente = this.clients[i];
        break;
      }
      this.ButtonAdd = false;
    }
  }

  deleteUser(usert) {
    for (var i = 0; i < this.users.length; i++) {
      if (usert == this.users[i]) {
        console.log(usert);
        this.users.splice(i, 1);
        this.addvalues()
        this.CanBuy()
        break;
      }
    }

  }
  createProduct() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name == this.selectedProduct) {
        this.users.push(this.products[i]);
      }
    }
    this.addvalues()
    this.CanBuy()
  }

  addvalues() {
    this.Total = 0;
    for (var j = 0; j < this.users.length; j++) {
      this.Total = this.Total + parseInt(this.users[j].price);
      console.log("####--" + this.Total)
    }
  }

  CanBuy(){
    console.log("ENtro!! " + this.users.length)
    if(this.users.length>0){
      this.ButtonBuy=false;
    }else{
      this.ButtonBuy=true;
    }
  }

  makeBuy(){
    this.ButtonBuy=true;
    this.ProductService.addClient('http://13.59.81.54:3009/pos/api/pagos/',this.users)
    .subscribe(hero=>{
      console.log("Hero" + hero);
      this.users=hero;
      console.log("users" + this.users);
      this.ButtonBuy=false;
    });
  }


  constructor(private ProductService: ProductosService) {


    this.ProductService.getData().subscribe(data => {
      console.log(data.items);
      this.products = data.items;
    });
    this.ProductService.getDataClientes().subscribe(data => {
      console.log(data);
      this.clients = data;
    });
  }

  ngOnInit() {


  }

}
