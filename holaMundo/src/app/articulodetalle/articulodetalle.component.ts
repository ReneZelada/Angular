import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/Articulo';

@Component({
  selector: 'app-articulodetalle',
  templateUrl: './articulodetalle.component.html',
  styleUrls: ['./articulodetalle.component.scss']
})
export class ArticulodetalleComponent implements OnInit {
articulo: Articulo
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
  this.articulo = JSON.parse (this.rutaActiva.snapshot.params.articulo)
  }

}
