import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  form: FormGroup;
 proyectos:Proyecto [] = [];
 

  constructor(private ProyectoS: ProyectoService, private formBuilder: FormBuilder) {
    
    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      id: [''],
    numero:[''],
    nombre:['',[Validators.required]],
    telefono:[''],
    email:[''],
    domicilio:[''],
    descripcion:['',[Validators.required]],
    inicioFecha:[''],
    finFecha:[''],
    tipo:['',[Validators.required]],
    estaHoy:[''],
    imagen1:[''],
    imagen2:[''],
    imagen3:[''],
    imagen4:[''],
    imagen5:[''],
    })  
}


  ngOnInit(): void {
    this.cargarProyecto();
  
  }
  cargarProyecto(): void {
    this.ProyectoS.verProyectos().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.ProyectoS.verProyecto(id).subscribe(
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
    let proye = this.form.value;
    console.log()

    if (proye.id == '') {
      this.ProyectoS.agregarProyecto(proye).subscribe(
        data => {
          alert("Su nuevo Proyecto fue añadido correctamente");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    } else {
      this.ProyectoS.editarProyecto(proye).subscribe(
        data => {
          alert("Proyecto editado!!! UIHUUU!!!!");
          this.cargarProyecto();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.ProyectoS.eliminarProyecto(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarProyecto()
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
  
}
