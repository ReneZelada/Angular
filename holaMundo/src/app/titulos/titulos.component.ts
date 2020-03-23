import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
nombre:string = "Maria"
apellido:string ="Perez"


alumno:any ={
  nombre:"carlos",
  apellido:"pineda",
  edad:21
}
imagen:string="https://www.paredro.com/wp-content/uploads/2019/05/Facebook-Logo.jpg"
inputNuevo:string ="Hola soy un nuevo input"

correo:string = ''
password:string =''
constructor() { }

  ngOnInit() {
  }

  ingresar(){
    console.log(this.correo)
    console.log(this.password)
  }

}
