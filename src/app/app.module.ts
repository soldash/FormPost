import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWord } from './firsComponent/first.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductosService} from './productos.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWord,
    UserComponent,
    CreateProductComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
