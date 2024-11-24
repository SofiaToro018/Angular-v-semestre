import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ova } from '../model/ova';

@Injectable({
  providedIn: 'root'
})
export class OvaService {

  private baseURL = "http://3.144.172.190:8080/api/v1/ova-service/ovas";

  constructor(private httpClient: HttpClient) { }

  //este metodo nos sirve para obtener los Ovas
  obtenerListaDeOvas(): Observable<Ova[]> {
    return this.httpClient.get<Ova[]>(${this.baseURL});
  }

  //este metodo nos sirve para registrar un Ova
  registrarOva(Ova: Ova): Observable<Object> {
    return this.httpClient.post(${this.baseURL}, Ova);
  }

  //este metodo sirve para actualizar el Ova
  actualizarOva(id: number, Ova: Ova): Observable<Object> {
    return this.httpClient.put(${this.baseURL}/${id}, Ova);
  }

  //este metodo sirve para obtener o buscar un Ova
  obtenerOvaPorId(id: number): Observable<Ova> {
    return this.httpClient.get<Ova>(${this.baseURL}/${id});
  }

  eliminarOva(id: number): Observable<Object> {
    return this.httpClient.delete(${this.baseURL}/${id});
  }
}
