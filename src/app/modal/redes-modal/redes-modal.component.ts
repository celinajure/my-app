import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Redes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';


@Component({
  selector: 'app-modal-redes',
  templateUrl: './redes-modal.component.html',
  styleUrls: ['./redes-modal.component.css']
})
export class RedesModalComponent implements OnInit {
  form: FormGroup;
  redes: Redes[] = [];
 


  constructor(private formBuilder: FormBuilder, private RedS: RedesService) {
    //Creamos el grupo de controles para el formulario 

    this.form = this.formBuilder.group({
      id: [''],
      url: ['', [Validators.required]],
      icoFont: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.cargarRed();
  }
  cargarRed(): void {
    this.RedS.verRedes().subscribe(
      data => {
        this.redes = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.RedS.verRed(id).subscribe(
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
    let red = this.form.value;
    console.log()

    if (red.id == '') {
      this.RedS.agregarRed(red).subscribe(
        data => {
          alert("Su nueva RED fue añadida correctamente");
          this.cargarRed();
          this.form.reset();
        }
      )
    } else {
      this.RedS.editarRed(red).subscribe(
        data => {
          alert("RED editada!!! UIHUUU!!!!");
          this.cargarRed();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.RedS.eliminarRed(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarRed()
      },
      error => {
        alert("No se pudo eliminar")
      })
  }

}

