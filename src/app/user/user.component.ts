import { Component, OnInit} from '@angular/core';
import { ProductosService} from 'src/app/productos.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: any[]=[];
  //products: any[] = [{"nombre" :"Pasta","precio":2000}, {"nombre" :"Frijol","precio":4000},{"nombre" :"Jabon","precio":1500},{"nombre" :"Arroz","precio":900}];
  selectedProduct: any={};
  selectedClient: any={};
  products = [];
  clients = [];
  Total = 0;

   alerting(usert){
    alert('Hello '+usert+"!!")
  }

  deleteUser(usert){
    for(var i =0; i< this.users.length;i++){
      if(usert==this.users[i]){
        console.log(usert);
        this.users.splice(i,1);
        this.addvalues()
        break;
      }
    } 

  }
  createProduct(){
      //console.log(this.selectedProduct);
      for(var i =0; i< this.products.length;i++){
        if(this.products[i].name==this.selectedProduct){
          this.users.push(this.products[i]);
        }
      }
      this.addvalues()
  }

  addvalues(){
      this.Total=0;
      for(var j =0; j< this.users.length;j++){
      this.Total = this.Total + parseInt(this.users[j].price);
      console.log("####--"+this.Total)
    }
  }

  constructor(private ProductService : ProductosService) { 
    this.ProductService.getData().subscribe(data =>{
      console.log(data.items);
      this.products= data.items;
    });
    this.ProductService.getDataClientes().subscribe(data =>{
      console.log(data);
      this.clients= data;
    });
  }

  ngOnInit() {

  }

}
