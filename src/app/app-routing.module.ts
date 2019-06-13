import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { NoticiasComponent } from './rutas/noticias/noticias.component';

import { DatosComponent } from './rutas/datos/datos.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  {
    path: 'inicio',
    component: InicioComponent,
    

  },
  {
    path: 'pruebas',
    component: PruebasComponent,
    

  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
 
  {
    path:'datos',
    component:DatosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
