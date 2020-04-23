import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms'
  import { from } from 'rxjs';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PipesComponent } from './pipes/pipes.component';
import { ContinuaraPipe } from './continuara.pipe';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivasComponent,
    EjemploComponent,
    PipesComponent,
    ContinuaraPipe,
    Pagina404Component,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
