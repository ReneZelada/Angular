import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
{
path:'', component: TitulosComponent
},
{
  path:'pipes', component: PipesComponent
},
{
  path:'ejemplos', component: EjemploComponent
},
{
  path:'directivas', component: DirectivasComponent
},
{
  path:'**', component: Pagina404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }