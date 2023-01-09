import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-sobre-mi',
  templateUrl: './modal-sobre-mi.component.html',
  styleUrls: ['./modal-sobre-mi.component.css']
})
export class ModalSobreMiComponent implements OnInit {
  form: FormGroup;
  personas: Persona[] = [];

  constructor(private formBuilder: FormBuilder, private PersonaS: PersonaService) {
    //Creamos el grupo de controles para el formulario 

    this.form = this.formBuilder.group({
      
      id: [''],
      nombre: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      imagen1: [''],
      imagen2: [''],
      imagen3: [''],
      imagen4: [''],
    })
  }


  ngOnInit(): void {
    this.cargarPersona();
  }
  cargarPersona(): void {
    this.PersonaS.verPersonas().subscribe(
      data => {
        this.personas = data;
      }
    )
  }
  cargarDetalle(id: number) {
    this.PersonaS.verPersona(id).subscribe(
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
    let per = this.form.value;
    console.log()

    if (per.id == '') {
      this.PersonaS.agregarPersona(per).subscribe(
        data => {
          alert("Su nueva PERSONA con ACCESO a la edición fue añadida correctamente");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.PersonaS.editarPersona(per).subscribe(
        data => {
          alert("Persona editada!!! UIHUUU!!!!");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.PersonaS.eliminarPersona(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarPersona()
      },
      error => {
        alert("No se pudo eliminar")
      })
  }
}
