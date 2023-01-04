import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.css']
})
export class ModalNavbarComponent implements OnInit {
  form: FormGroup;
  modoEdit: boolean;

  constructor(private datos: DatosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     //Creamos el grupo de controles para el formulario 
     this.datos.getDatos().subscribe(info => {
      this.datos = info.datos
      /*JOSMAN:*/
      if ( sessionStorage.getItem('currentUser') == "null"){
        this.modoEdit =false;
      }else if ( sessionStorage.getItem('currentUser') == "null"){ 
        this.modoEdit =false;
      }else{
        this.modoEdit =true;;
      }
         
    })
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      nombre: ['',[Validators.required]],
      lugar: [''],
      inicioFecha: [''],
      finFecha: [''],
    })
  }

}
