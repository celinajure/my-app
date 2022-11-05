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
import { HttpClientModule} from '@angular/common/http';
import { FooterModalComponent } from './modales/footer-modal/footer-modal.component';
import { HardSkillsModalComponent } from './modales/hard-skills-modal/hard-skills-modal.component';
import { NavbarModalComponent } from './modales/navbar-modal/navbar-modal.component';
import { PanelModalComponent } from './modales/panel-modal/panel-modal.component';
import { ProyectosModalComponent } from './modales/proyectos-modal/proyectos-modal.component';
import { RegistrateModalComponent } from './modales/registrate-modal/registrate-modal.component';
import { SobreMiModalComponent } from './modales/sobre-mi-modal/sobre-mi-modal.component';
import { ExperienciaModalComponent } from './modales/experiencia-modal/experiencia-modal.component';
import { EducacionModalComponent } from './modales/educacion-modal/educacion-modal.component';
import { RedesModalComponent } from './modales/redes-modal/redes-modal.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { BotonLoginComponent } from './componentes/boton-login/boton-login.component';

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
    RegistrateComponent,
    FooterModalComponent,
    HardSkillsModalComponent,
    NavbarModalComponent,
    PanelModalComponent,
    ProyectosModalComponent,
    RegistrateModalComponent,
    SobreMiModalComponent,
    ExperienciaModalComponent,
    EducacionModalComponent,
    RedesModalComponent,
    LogoutComponent,
    BotonLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
