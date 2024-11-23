import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarOvasComponent } from './listar-ovas/listar-ovas.component';
import { CrearOvaComponent } from './crear-ova/crear-ova.component';
import { DetalleOvaComponent } from './detalle-ova/detalle-ova.component';
import { OvasRoutingModule } from "./ova-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { EditarOvaComponent } from './editar-ovas/editar-ovas.component';

@NgModule({
  declarations: [
    ListarOvasComponent,
    CrearOvaComponent,
    DetalleOvaComponent,
    EditarOvaComponent,
  ],
  exports: [
    ListarOvasComponent
  ],
  imports: [
    CommonModule,
    OvasRoutingModule,
    ReactiveFormsModule
  ]
})
export class OvasModule { }
