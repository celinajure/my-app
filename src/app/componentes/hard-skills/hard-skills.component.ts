import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkills:any;
  constructor(private datos:DatosService) { }
   

  ngOnInit(): void {
    this.datos.getDatos().subscribe(info =>{
      this.hardSkills = info.hardSkills;
    }


    )

  }

}
