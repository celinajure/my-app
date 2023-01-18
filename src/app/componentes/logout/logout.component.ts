import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service'; 
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  modoEdit:any;
  persona: any;
  constructor(private datos: DatosService, private ruta: Router ,private personaService: PersonaService) { }

  ngOnInit(): void {
 
      this.personaService.verPersonas().subscribe(data =>{
        this.persona = data
      });
      if (sessionStorage.getItem('currentUser') == null){
        this.modoEdit = false;
      }else if (sessionStorage.getItem('currentUser') == null){
        this.modoEdit = false;
      }
  }

cerrarSesion(){
  sessionStorage.setItem('currentUser', null);
  this.modoEdit = false;
  alert("SESIÓN CERRADA");

  window.sessionStorage.removeItem;
  this.ruta.navigate(['/']);
}
}

/*cerrarSesion(){
  sessionStorage.setItem('currentUser', "null");
  this.modoEdit = false;
  alert("sesion cerrada");
  window.location.reload();
  return this.modoEdit;
}*/