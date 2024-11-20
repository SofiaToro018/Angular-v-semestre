import { Component, Input } from '@angular/core';
import { Ova } from "../model/ova";

@Component({
  selector: 'app-detalle-ova',
  templateUrl: './detalle-ova.component.html',
  styleUrls: ['./detalle-ova.component.css']
})
export class DetalleOvaComponent {
  @Input() ova!: Ova;
}

