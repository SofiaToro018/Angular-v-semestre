import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OvaService } from "../service/ova.service";
import { Ova } from "../model/ova";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-ova',
  templateUrl: './editar-ova.component.html',
  styleUrls: ['./editar-ova.component.css']
})
export class EditarOvaComponent implements OnInit {

  // Creamos e inicializamos el formulario editarOvaForm usando el constructor de FormGroup
  public editarOvaForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(4)]),
    ova: new FormControl('', [Validators.required, Validators.minLength(4)]),
    programa: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  // Creamos un atributo (relación) ova que es el que vamos a editar
  public ova!: Ova;

  /**
   * Constructor del componente
   * @param router Router de la aplicación
   * @param formBuilder Formulario de edición de OVA
   * @param ovaService Servicio de OVA para editar
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private ovaService: OvaService, private route: ActivatedRoute) { }

  /**
   * Método que cancela la edición de un OVA
   */
  cancelarEditarOva() {
    this.router.navigate(['/listar']); // Redirecciona a la ruta /listar
  }

  /**
   * Método que edita un OVA en el servicio
   * @param ova OVA a editar
   */
  editarOva(ova: Ova) {
    this.ovaService.editarOva(ova).subscribe( // Le decimos al servicio que edite el OVA
      (ova: Ova) => {
        Swal.fire( // Notifica al usuario que el OVA ha sido editado
          'OVA editado',
          `El OVA ${ova.ova} ha sido actualizado con éxito`,
          'success'
        );
        this.router.navigate(['/listar']); // Redirecciona a la ruta /listar
      });
  }

  /**
   * Método que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idOva = parseInt(this.route.snapshot.params['id']); // Obtenemos el ID del OVA a editar

    this.ovaService.getOva(idOva).subscribe((ova) => { // Solicitamos al servicio el OVA a editar
      this.ova = ova; // Obtenemos el OVA
      this.editarOvaForm = this.formBuilder.group({ // Creamos el formulario editarOvaForm
        id: [this.ova.id, []], // Mostramos el ID del OVA (no editable)
        ova: [this.ova.ova, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del OVA
        programa: [this.ova.programa, [Validators.required, Validators.minLength(4)]] // Mostramos el programa del OVA
      });
    });
  }

}
