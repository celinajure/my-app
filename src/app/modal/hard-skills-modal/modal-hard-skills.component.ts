import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-hard-skills',
  templateUrl: './modal-hard-skills.component.html',
  styleUrls: ['./modal-hard-skills.component.css']
})
export class ModalHardSkillsComponent implements OnInit {
[x: string]: any;
  form: FormGroup;
  habilidades: Habilidad []=[];



//Porcentaje: any;



  constructor(private HabilidadS: HabilidadService, private formBuilder: FormBuilder) { 

    //Creamos el grupo de controles para el formulario 
    
    this.form = this.formBuilder.group({
      id: [''],
      nombre:  ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min, Validators.max]],
    })
  }

  ngOnInit(): void {
    this.cargarHabilidad();
  }
  
  cargarHabilidad(): void {
    this.HabilidadS.verHabilidades().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.HabilidadS.verHabilidad(id).subscribe(
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
  let habi = this.form.value;
  console.log()

  if (habi.id == '') {
    this.HabilidadS.agregarHabilidad(habi).subscribe(
      data => {
        alert("Su nueva HABILIDAD fue añadida correctamente");
        this.cargarHabilidad();
        this.form.reset();
      }
    )
  } else {
    this.HabilidadS.editarHabilidad(habi).subscribe(
      data => {
        alert("Habilidad editada!!! UIHUUU!!!!");
        this.cargarHabilidad();
        this.form.reset();
      }
    )
  }
}

borrar(id: number) {
  this.HabilidadS.eliminarHabilidad(id).subscribe(
    db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarHabilidad()
      },
      error => {
      alert("No se pudo eliminar")
      })
    }

  }

 