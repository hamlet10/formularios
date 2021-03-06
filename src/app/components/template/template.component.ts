import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent {
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "masculino",
    acepta: false
  };

  paises = [
    {
      codigo: "RD",
      nombre: "Republica Dominicana"
    },
    {
      codigo: "CL",
      nombre: "Colombia"
    }
  ];

  sexos: string[] = ["masculino", "femenino", "sin definir"];

  constructor() {}

  guardar(forma: NgForm) {
    console.log("Info. Posteada");
    console.log(forma);
    console.log("valor: ", forma.value);
    console.log("valor de usuario: ", this.usuario);
  }
}
