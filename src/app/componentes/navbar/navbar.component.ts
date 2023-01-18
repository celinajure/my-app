import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
redes: any;
miPortfolio:any;
usuarioAuth: boolean= false;
  constructor(private datos: DatosService, private auth: AutenticacionService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
   
    this.datos.getDatos().subscribe(info =>{

      this.redes = info.redes;
    }
    );
    const id = this.route.snapshot.paramMap.get('idPersona');
    var url = "";
    if (id=== null || id=== undefined) {
      url = "buscar/persona/15";
    }else{
      url = "buscar/persona/" + id;
    }

    this.auth.loginPersona(url).subscribe( data=>{      
    this.miPortfolio = data;
    if (sessionStorage.getItem('currentUser') == "null") {
      this.usuarioAuth = false;        
    } else if (sessionStorage.getItem('currentUser') == null){
        this.usuarioAuth = false;       
    }else{
        this.usuarioAuth = true;      
    }
  });
  }
}
