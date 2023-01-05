import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AboutComponent } from './componentes/about/about.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { LoginComponent } from './modals/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FootComponent } from './componentes/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienciaComponent,
    AboutComponent,
    EducacionComponent,
    HabilidadesComponent,
    LoginComponent,
    BannerComponent,
    ProyectoComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
