import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/productos.service';
import { factura } from '../factura';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: any[] = [];
  Cliente: any = {};
  selectedProduct: any = {};
  selectedClient: any = {};
  products = [];
  clients = [];
  Total = 0;
  date = new Date().toLocaleDateString();
  compra: factura={"data":[{"_id":"5c0aafe18b62b8597f1e2bf7","name":"luces","priceXUnidad":250000,"priceXUnidadIva":297500,"priceTotal":500000,"priceTotalIva":595000,"cantidad":2,"code":"P003","description":"Descrición de microservicio"},{"_id":"5c0d5a356c5b410a57736fb8","name":"llantas","priceXUnidad":80000,"priceXUnidadIva":95200,"priceTotal":80000,"priceTotalIva":95200,"cantidad":1,"code":"P005","description":"llantas para bicicleta de montaña"}],"compra":{"precioTotal":580000,"precioTotalIva":690200,"soloIva":110200,"valorPagado":690200,"cambio":0},"message":"Los datos fueron cargados correctamente"};

  ButtonAdd = true;
  ButtonBuy = true;
  showBill = true;

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
    this.ProductService.addBill('http://13.59.81.54:3009/pos/api/pagos/',this.users)
    .subscribe(hero=>{
      this.compra=hero;
      this.ButtonBuy=false;
      this.showBill=false;
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
