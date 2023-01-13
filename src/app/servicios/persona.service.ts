import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  editPersona() {
    throw new Error('Method not implemented.');
  }
  
  url = `https://celinajureportfolio.onrender.com/persona/`;
updatePersona:any;

  constructor(private http: HttpClient) { }

  public verPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + `ver`);
  }

  public verPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + `ver/${id}`);
  }

  public agregarPersona(per: Persona): Observable<any> {
    return this.http.post<Persona>(this.url + `new`, per);
  }

  public eliminarPersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.url + `delete/` + id);
  }
  
  public editarPersona(per: Persona): Observable<any> {
    return this.http.put<Persona>(this.url + `editar/$`, per);
  }
}



