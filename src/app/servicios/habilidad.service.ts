import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Habilidad} from '../model/habilidad';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  editHabilidad() {
    throw new Error('Method not implemented.');
  }
  url = `https://celinajureportfolio.onrender.com/habilidad/`;
  updateHabilidad: any;
  
  constructor(private http:HttpClient) { }

public verHabilidades(): Observable<Habilidad[]>{
return this.http.get<Habilidad[]>(this.url+`ver`);
}

public verHabilidad(id: number): Observable<Habilidad> {
  return this.http.get<Habilidad>(this.url + `ver/${id}`);
}

public agregarHabilidad(habi: Habilidad): Observable<any> {
  return this.http.post<Habilidad>(this.url + `new`, habi);
}

public eliminarHabilidad(id: number): Observable<Habilidad> {
  return this.http.delete<Habilidad>(this.url + `delete/` + id);
}

public editarHabilidad(habi: Habilidad): Observable<any> {
  return this.http.put<any>(this.url + `editar/$`, habi);
}
}
