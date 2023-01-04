import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  form: FormGroup;
experiencias:Experiencia[] = [];
 

  constructor(private ExperienciaS: ExperienciaService, private formBuilder: FormBuilder) { 
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      telefono: [''],
      email: [''],
      url: ['',[Validators.required]],
      inicioFecha: [''],
      finFecha: [''],
      tipo: ['',[Validators.required]],
      estaHoy:['']
    })
   }
  ngOnInit(): void {
    this.cargarExperiencia();
  }
  
  

  cargarExperiencia(): void {
    this.ExperienciaS.verExperiencias().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.ExperienciaS.verExperiencia(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }
  //👇 esto es solo para hacer pruebas en local


  guardar() {
    console.log("FUNCIONA!!!")
    let expe = this.form.value;
    console.log()

    if (expe.id == '') {
      this.ExperienciaS.agregarExperiencia(expe).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    } else {
      this.ExperienciaS.editarExperiencia(expe).subscribe(
        data => {
          alert("Experiencia editada!!! BRAVOOOOO!!!!");
          this.cargarExperiencia();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.ExperienciaS.eliminarExperiencia(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarExperiencia()
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
    
  }


