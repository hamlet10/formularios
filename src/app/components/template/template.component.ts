import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {

  usuario:Object ={
    nombre: "Juan",
    apellido: "Perez",
    correo: ""
  };

  constructor() { }

  guardar(forma:NgForm){
    console.log("Info. Posteada");
    console.log(forma);
    console.log("valor: ", forma.value);
    console.log("valor de usuario: ", this.usuario);
    
    
    
    
  }

  

}
