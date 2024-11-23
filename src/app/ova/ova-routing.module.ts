import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOvasComponent } from "./listar-ovas/listar-ovas.component";
import { CrearOvaComponent } from "./crear-ova/crear-ova.component";
import { DetalleOvaComponent } from "./detalle-ova/detalle-ova.component";
import { EditarOvaComponent } from "./editar-ovas/editar-ovas.component";

const routes: Routes = [
  {
    path: '',
    component: ListarOvasComponent
  },
  {
    path: 'listar',
    component: ListarOvasComponent
  },
  {
    path: 'crear',
    component: CrearOvaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleOvaComponent
  },
  {
    path: 'editar/:id',
    component: EditarOvaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvasRoutingModule { }
