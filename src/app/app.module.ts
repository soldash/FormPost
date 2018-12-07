import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWord } from './firsComponent/first.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductosService} from './productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWord,
    UserComponent
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
