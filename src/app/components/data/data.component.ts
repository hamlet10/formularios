import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: "ferando.herrera@gmail.com",
    pasatiempos:["Comer", "dormir", "correr"]
  }


  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({

        'nombre': new FormControl('', [Validators.required,
        Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required,
                                        this.noHerrera])
        }),
      'correo': new FormControl('', [Validators.required,
      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),

      'pasatiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()

    })

    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual])
    this.forma.controls['username'].valueChanges.subscribe( data => {console.log(data);
    })
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noHerrera( control:FormControl ):{[s:string]:boolean}{
    if(control.value === 'herrera'){
      return{
        noherrera:true
      }
      
    }
    return null;
  }

  noIgual = ( control:FormControl ):{[s:string]:boolean} => {
    if(control.value !== this.forma.controls['password1'].value ){
      return{
        noigual:true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        if (control.value === "strider") {
          resolve({ existe: true })
        } else {
          resolve(null)
        }
      }, 3000)

    }

    )
    return promesa;
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset({
    //   nombrecompleto:{
    //     nombre:"",
    //     apellido:""
    //   },
    //   correo:""
    // })
 }
}
