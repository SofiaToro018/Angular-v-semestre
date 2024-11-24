import { Component } from '@angular/core';
import { Ova } from '../model/ova';
import { OvaService } from '../service/ova.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError, tap, throwError } from 'rxjs';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-ova',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-ova.component.html',
  styleUrls: ['./crear-ova.component.css']
})
export class CrearOvaComponent {
  ova: Ova = new Ova();

  constructor(private ovaService: OvaService, private router: Router) {}

  guardarOva() {
    this.ovaService.crearOva(this.ova).pipe(
      tap(dato => {
        console.log(dato);
        this.irALaListaDeOvas();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }

  irALaListaDeOvas() {
    this.router.navigate(['/ovas']);
    Swal.fire('OVA registrado', 'El OVA "${this.ova.nombre}" ha sido registrado con éxito', 'success');
  }

  onSubmit() {
    this.guardarOva();
  }
}
