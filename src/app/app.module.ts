import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//import { PortfolioService } from './servicio/portfolio.service';

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
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { NavbaradmComponent } from './componentes/navbaradm/navbaradm.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

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
    FootComponent,
    HomeComponent,
    AdminComponent,
    NavbaradmComponent,
    DashboardComponent
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
