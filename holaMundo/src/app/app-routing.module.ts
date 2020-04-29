import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticulodetalleComponent } from './articulodetalle/articulodetalle.component';

const routes: Routes = [
{ path:'', component: TitulosComponent },
{ path:'pipes', component: PipesComponent },
{ path:'ejemplos', component: EjemploComponent },
{ path:'directivas', component: DirectivasComponent },
{ path:'usuarios', component: UsuariosComponent, children:[
    { path:'agregarusuario', component: AgregarusuariosComponent },
    { path:'editarusuario', component: EditarusuariosComponent }
  ]
},
{ path:'articulos', component: ArticulosComponent},
{ path:'articulodetalle', component: ArticulodetalleComponent},
{ path:'**', component: Pagina404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
