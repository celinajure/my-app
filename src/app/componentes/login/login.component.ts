
 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  //authService: any;
  
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "",);
  
 
 
 
  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService: AutenticacionService) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        clave:['',[Validators.required,Validators.minLength(8)]],
        
      })
   }
 
  ngOnInit(): void {
  }
 

get Email(){
   return this.form.get('email');
  }
 
get Clave(){
  return this.form.get('clave');
}
//metodo de validacionde password
get PasswordValid(){
  return this.Clave?.touched && !this.Clave?.valid;
  }
  
  //metodo de validacion de mail
  get MailValid(){
  return this.Email?.touched && !this.Email?.valid;
  }
onEnviar(event: Event){
  event.preventDefault;
  this.autService.loginPersona(this.form.value).subscribe(data =>
    {
      console.log("DATA: " + JSON.stringify(data));
    
    this.ruta.navigate(['/panel'])
   
      },error=>{
        console.log(error);
      }
      )
    }
    
    };
  




/* codigo de cintia completo....-------------
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../servicios/proyecto.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  email = '';
  password = '';
  authService: any;

  // Inyectar en el constructor el formBuilder
  constructor(public _servicio: ProyectoService,  private formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
     
   })
}
  
  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
     


    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      
let pers:Persona = new Persona("", "", "", "", "", "", "",this.form.get("email")?.value,  this.form.get("password")?.value);

      this.autenticacionService.login(pers).subscribe(data=>{
        console.log("DATA:" + JSON.stringify(data));
        this.ruta.navigate(['/dashboard']);
      },error=>{
        console.log(error);
      }
      )
    }
    else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("Todo salio mal, no enviar el formulario") 
    };
 
 }
 ngOnInit(): void {}
 //metodo para el formulario
 
 //toma el dato del password
 get Password(){
 return this.form.get("password");
 }
 
 //toma el dato de mail
 get Mail(){
 return this.form.get("email");
 }
 
 //metodo de validacionde password
 get PasswordValid(){
 return this.Password?.touched && !this.Password?.valid;
 }
 
 //metodo de validacion de mail
 get MailValid(){
 return this.Mail?.touched && !this.Mail?.valid;
 }
 
 

}*/