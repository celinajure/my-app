import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesService {
  url = `https://celinajureportfolio.onrender.com/red/`;
  updateRed: any;
  
  constructor(private http:HttpClient) { }

public verRedes(): Observable<Redes[]>{
return this.http.get<Redes[]>(this.url+`ver`);
}

public verRed(id:number): Observable<Redes>{
  return this.http.get<Redes>(this.url+`ver/${id}`);
}

public agregarRed(red: Redes): Observable<any> {
  return this.http.post<Redes>(this.url + `new`, red);
}

public eliminarRed(id: number): Observable<Redes> {
  return this.http.delete<any>(this.url + 'delete/' + id);
}

public editarRed(red: Redes): Observable<any> {
  return this.http.put<Redes>(this.url + `editar/$`, red);
}
}
