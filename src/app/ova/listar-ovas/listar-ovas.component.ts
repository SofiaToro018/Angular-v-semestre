import {Component, OnInit} from '@angular/core';
import {Ova} from "../model/ova";
import {OvaService} from "../service/ova.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-listar-ovas',
  templateUrl: './listar-ovas.component.html',
  styleUrls: ['./listar-ovas.component.css']
})
export class ListarOvasComponent implements OnInit {
  public ovas: Array<Ova> = [];
  public nombreOva!: string;
  public ovaSelected!: Ova;
  public selected: boolean = false;

  constructor(private ovaService: OvaService, private routerPath: Router, private router: ActivatedRoute) {
    this.ovaService.getOvas().subscribe(
      (ovas: Array<Ova>) => {
        this.ovas = ovas;
      }
    );
  }


  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    // this.ovas[0] = {id: 1, ova: 'Angular', programa: 'Ingenieria de sistemas'};
    // this.ovas[1] = {id: 2, ova: 'Java', programa: 'Ingenieria de sistemas'};
    // this.ovas[2] = {id: 3, ova: 'Python', programa: 'Ingenieria de sistemas'};
    // this.ovas[3] = {id: 4, ova: 'C#', programa: 'Ingenieria de sistemas'};
    // this.ovas[4] = {id: 5, ova: 'C++', programa: 'Ingenieria de sistemas'};
  }

  /**
   * Evento que se dispara al seleccionar un ova en la lista
   * @param ova Ova seleccionado
   */
  onSelected(ova: Ova) {
    this.ovaSelected = ova;
    this.selected=true;
    // console.log(this.ovaSelected); //Imprime en la consola del navegador el ova seleccionado
    this.routerPath.navigate(['/editar/' + this.ovaSelected.id]); //Redirecciona a la ruta /editar/:id
  }

  /**
   * Metodo que elimina un ova seleccionado de la lista
   * @param ova Ova a eliminar
   */
  borrarOva(ova: Ova) {
    Swal.fire({
      title: "Esta seguro?",
      text: "Usted no puede revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra el ova!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.ovaService.borrarOva(ova.id).subscribe(() => { // Llama al servicio para eliminar el ova
          Swal.fire({
            title: "Eliminado!",
            text: "El ova ha sido eliminado.",
            icon: "success"
          });
          this.ovas = this.ovas.filter((o) => o !== ova); // Actualiza la lista de ovas en la vista
        });
      }
    });
  }

  /**
   * Metodo que redirecciona a la ruta /crear
   */
  crearOva() {
    this.routerPath.navigate(['/crear']);
  }
}
