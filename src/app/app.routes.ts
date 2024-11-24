import { Routes } from '@angular/router';
import { ListarOvasComponent } from './ova/listar-ovas/listar-ovas.component';
import { CrearOvaComponent } from './ova/crear-ova/crear-ova.component';
import { EditarOvaComponent } from './ova/editar-ovas/editar-ovas.component';
import {DetalleOvaComponent} from "./ova/detalle-ova/detalle-ova.component";

export const routes: Routes = [
    {path : 'ovas',component:ListarOvasComponent},
    {path:'',redirectTo:'ovas',pathMatch:'full'},
    {path : 'crear-ova',component : CrearOvaComponent},
    {path : 'editar-ovas/:id',component : EditarOvaComponent},
    {path : 'detalle-ova/:id',component : DetalleOvaComponent}
];
