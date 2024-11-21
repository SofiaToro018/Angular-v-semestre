import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarOvasComponentCssComponent } from './ovas/listar-ovas/listar-ovas.component.css/listar-ovas.component.css.component';
import { ListarOvasComponent } from './ovas/listar-ovas/listar-ovas.component';
import { EditarOvasComponent } from './ovas/editar-ovas/editar-ovas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarOvasComponentCssComponent,
    ListarOvasComponent,
    EditarOvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
