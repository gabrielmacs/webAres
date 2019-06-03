import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Pro
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { CarrouselPortadaComponent } from './componentes/carrousel-portada/carrousel-portada.component';
// For MDB Angular Free
import { CollapseModule } from 'angular-bootstrap-md';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { ProblemasComponent } from './componentes/problemas/problemas.component';
import { SociosAcademicosComponent } from './componentes/socios-academicos/socios-academicos.component';
import { EmpresasAsociadasComponent } from './componentes/empresas-asociadas/empresas-asociadas.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './rutas/noticias/noticias.component';
import { NoticiaComponenteComponent } from './componentes/noticia-componente/noticia-componente.component';
import { ContactosRutaComponent } from './rutas/contactos-ruta/contactos-ruta.component';
import { ObjetivosEspecificosComponent } from './componentes/objetivos-especificos/objetivos-especificos.component';
import { IdiomaService } from './servicios/idioma.service';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    CarrouselPortadaComponent,
    InicioComponent,
    ResumenComponent,
    ProblemasComponent,
    SociosAcademicosComponent,
    EmpresasAsociadasComponent,
    EquipoComponent,
    ContactoComponent,
    NoticiasComponent,
    NoticiaComponenteComponent,
    ContactosRutaComponent,
    ObjetivosEspecificosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(), NavbarModule, WavesModule, CollapseModule, NgbModule,ButtonsModule, InputsModule
  ],
  providers: [IdiomaService],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
