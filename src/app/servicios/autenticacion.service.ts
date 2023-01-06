import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
//import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/persona/autenticacion/login";
  currentUserSubject: BehaviorSubject<any>;
  
 

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
   }
loginPersona(credenciales:any): Observable<any>{
var httpOptions={headers:new HttpHeaders({
  'Content-Type':'application/json'
})}
return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data => {
sessionStorage.setItem('currentUser',JSON.stringify(data));
this.currentUserSubject.next(data);
console.log("Servicio esta corriendo" + JSON.stringify(data));
return data
}));
}
 get usuarioAutenticado(){  
  return this.currentUserSubject.value;
 }
}

