import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Ova } from "../model/ova";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OvaService {
  private baseUrl: string = "http://"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) {}

  /**
   * Método que obtiene los OVAs
   * @returns Observable<Ova[]> Lista de OVAs
   */
  getOvas(): Observable<Ova[]> {
    return this.httpClient.get<Ova[]>(this.baseUrl + "/ovas")
      .pipe(
        map((result: any) => {
          console.log(result._embedded.ovas);
          return result._embedded.ovas;
        }));
  }

  /**
   * Método que obtiene un OVA
   */
  getOva(idOva: number): Observable<Ova> {
    return this.httpClient.get<Ova>(this.baseUrl + '/ovas/' + idOva);
  }

  /**
   * Método que crea un OVA
   * @param ova OVA a crear
   */
  crearOva(ova: Ova): Observable<Ova> {
    return this.httpClient.post<Ova>(this.baseUrl + "/ovas", ova);
  }

  /**
   * Método que edita un OVA
   * @param ova OVA a editar
   */
  editarOva(ova: Ova): Observable<Ova> {
    return this.httpClient.put<Ova>(this.baseUrl + "/ovas/" + ova.id, ova);
  }

  /**
   * Método que elimina un OVA
   */
  borrarOva(idOva: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/ovas/" + idOva);
  }
}
