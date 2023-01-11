import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
personas: Persona []=[];



    constructor(private datos:PersonaService) { }

  

  ngOnInit(): void {
    this.datos.verPersonas().subscribe(info =>{
      this.personas = info;
    }
 )
}
}

