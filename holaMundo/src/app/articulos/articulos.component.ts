import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/Articulo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit() {
  this.articulos.push(
    {nombre: "Televisor 20 pulgagas",descripcion: "Marca Sony",stock: 100 ,precio: 3500, precioMayorista: 3000},
    {nombre: "Televisor 14 pulgagas",descripcion: "Marca Samsung",stock: 10 ,precio: 2500, precioMayorista: 1800},
    {nombre: "Televisor 10 pulgagas",descripcion: "Marca RCA",stock: 150 ,precio: 1500, precioMayorista: 1000}
    )
  }

pasarParametros(articuloRecibido: Articulo){
this.ruta.navigate(['articulodetalle',{articulo: JSON.stringify(articuloRecibido)}])
}


}
