/**
 * Modelo de datos para OVA.
 * La clase Ova representa una entidad que se podría mapear en una base de datos.
 */
export class Ova {
  public id: number;
  public nombre: string;
  public intensidad: number;
  public semestre: string;

  constructor(id: number, nombre: string, intensidad: number, semestre: string) {
    this.id = id;
    this.nombre = nombre;
    this.intensidad = intensidad;
    this.semestre = semestre;
  }
}
