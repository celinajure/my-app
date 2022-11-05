import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
redes:any;

  constructor(private datos: DatosService) { }

  ngOnInit(): void {
this.datos.getDatos().subscribe(info=>{
  this.redes=info.redes;

}
)
  }

}
