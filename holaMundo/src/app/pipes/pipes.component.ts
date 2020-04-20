import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo:string = "Hola soy un titulo"
  textoLargo:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
  dinero:number = 2400
  ganancias:number = 0.54
  fecha:Date =new Date(6-1-1992)
  constructor() { }

  ngOnInit() {
  }

}
