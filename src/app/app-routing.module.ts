import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { InicioComponent } from './rutas/inicio/inicio.component';
import { NoticiasComponent } from './rutas/noticias/noticias.component';
import { ContactosRutaComponent } from './rutas/contactos-ruta/contactos-ruta.component';

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
    path:'contactos',
    component:ContactosRutaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
