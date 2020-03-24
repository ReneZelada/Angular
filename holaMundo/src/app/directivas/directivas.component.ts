import { Component, OnInit } from '@angular/core';
interface Producto{
  nombre:string;
  stock:number;
  fabricantes: string;
  fechaVence:Date;
}



@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
cargando: boolean =true;
mostrarCuadrado: boolean =true;
nombres: Array<string> = ["Maria","Ana","Juan","Pedro"]
pestana:string =''
productos: Array<Producto> = [
  {
    nombre:"Arroz",
    stock : 15,
    fabricantes: "Industrial",
    fechaVence: new Date('04/05/2020')
  },
  {
    nombre:"Maiz",
    stock : 25,
    fabricantes: "Industrial",
    fechaVence: new Date('04/05/2021')
  },
  {
    nombre:"Refresco",
    stock : 200,
    fabricantes: "Coca Cola",
    fechaVence: new Date('01/05/2024')
  }
]

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.cargando = false
    },5000)
  }
  mostrarCargando(){
    this.cargando = !this.cargando
  }
cambiarPestana(pestana:string)
{
  this.pestana = pestana;
}
alternatFondo(){
  this.mostrarCuadrado = !this.mostrarCuadrado
}
}
