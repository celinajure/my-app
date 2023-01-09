import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  editProyecto() {
    throw new Error('Method not implemented.');
  }
  url = `http://localhost:8080/proyecto/`;
  updateProyecto: any;

  constructor(private http:HttpClient) { }

  public verProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + `ver`);
  }

  public verProyecto(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + `ver/${id}`);
  }

  public agregarProyecto(proye: Proyecto): Observable<any> {
    return this.http.post<Proyecto>(this.url + `new`, proye);
  }

  public eliminarProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<any>(this.url + `delete/`+ id);
  }

  public editarProyecto(proye: Proyecto): Observable<any> {
    return this.http.put<Proyecto>(this.url + `editar/$`, proye);
  }
}
