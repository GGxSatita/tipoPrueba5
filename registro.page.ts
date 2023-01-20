import { Component, OnInit } from '@angular/core';
import {ApiRegistroService} from './../../services/api-registro.service';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formularioRegi : FormGroup

  constructor(
    private builder : FormBuilder,
    private apiReg : ApiRegistroService
  ) {
    this.formularioRegi = builder.group({
      firstName : ['',[Validators.required, Validators.maxLength(15), Validators.minLength(1)]],
      lastName : ['',[Validators.required,Validators.maxLength(20), Validators.minLength(4)]],
      age : [0, [Validators.required, Validators.min(18), Validators.max(98)]],
      username :['',[Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
      password : ['',[Validators.required, Validators.maxLength(16), Validators.minLength(8)]],
      birthDate : ['', [Validators.required]],
      gender : ['', [Validators.required]]
    })
   }

   public validarRegistro(){
    // const formularioValido = this.formularioRegi.valid;
    // if(!formularioValido){
    //   return
    // }
    this.apiReg.registrar({
      firstName: this.formularioRegi.value.firstName,
      lastName : this.formularioRegi.value.lastName,
      age : this.formularioRegi.value.age,
      username : this.formularioRegi.value.username,
      password : this.formularioRegi.value.password,
      birthDate : this.formularioRegi.value.birthDate,
      gender : this.formularioRegi.value.gender,
    })
   }



  ngOnInit() {
  }

}
