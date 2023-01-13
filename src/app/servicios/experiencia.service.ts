import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  editExperiencia() {
    throw new Error('Method not implemented.');
  }
  url = 'https://celinajureportfolio.onrender.com/experiencia/';
  updateExperiencia: any;

  constructor(private http:HttpClient) { }

  public verExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url+`ver`);
    }
    
    public verExperiencia(id: number): Observable<Experiencia> {
      return this.http.get<Experiencia>(this.url+`ver/${id}`);
    }
    
    public agregarExperiencia(expe: Experiencia): Observable<any> {
      return this.http.post<any>(this.url + `new`, expe);
    }
    
    public eliminarExperiencia(id:number): Observable<Experiencia> {
      return this.http.delete<any>(this.url + 'delete/' + id);
    }
    
    public editarExperiencia(expe: Experiencia): Observable<any> {
      return this.http.put<Experiencia>(this.url + `editar/$`, expe);
    }
    }
