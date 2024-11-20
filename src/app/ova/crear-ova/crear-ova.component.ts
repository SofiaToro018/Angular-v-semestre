import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ova} from "../model/ova";
import {OvaService} from "../service/ova.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-ova',
  templateUrl: './crear-ova.component.html',
  styleUrls: ['./crear-ova.component.css']
})
export class CrearOvaComponent implements OnInit {
  public crearOvaForm: FormGroup = new FormGroup({
    ova: new FormControl('', [Validators.required, Validators.minLength(4)]),
    programa: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  /**
   * Constructor del componente
   * @param router Router de la aplicación
   * @param formBuilder Formulario de creación de OVA
   * @param ovaService Servicio de OVA para crear un OVA
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private ovaService: OvaService) {

  }

  /**
   * Método que cancela la creación de un OVA
   */
  cancelarCrearOva() {
    this.router.navigate(['/listar']);
  }

  /**
   * Método que crea un OVA en el servicio
   * @param ova OVA a crear
   */
  crearOva(ova: Ova) {
    this.ovaService.crearOva(ova).subscribe(
      (ova: Ova) => {
        Swal.fire(
          'OVA creado',
          `El OVA ${ova.ova} ha sido creado con éxito`,
          'success'
        );
        this.crearOvaForm.reset(); // Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }

  ngOnInit(): void {
    this.crearOvaForm = this.formBuilder.group({
      ova: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
