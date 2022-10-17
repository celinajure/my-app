import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Error404Component } from './componentes/error404/error404.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { LoginComponent } from './componentes/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { ModalComponent } from './modal/modal.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    HardSkillsComponent,
    ProyectosComponent,
    Error404Component,
    FooterComponent,
    PanelComponent,
    LoginComponent,
    IndexComponent,
    ModalComponent,
    RegistrateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
