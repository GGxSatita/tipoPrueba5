import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthApiService} from './auth-api.service';
import {Productos, ProductosRespuesta} from './../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  public URL_PRODUCTOS : string = 'https://dummyjson.com/auth/products?skip=0'

  public listaProductos : ProductosRespuesta | null = null;

  constructor(
    private cliente : HttpClient,
    private apiAuth : AuthApiService
  ) { }

  public traerProducts(){
    this.cliente.get<ProductosRespuesta>(this.URL_PRODUCTOS,{
      headers :{
        'Content-Type' : 'application/json',
        'Autorization': 'Bearer '+ this.apiAuth.datosUsuario?.token
      }
    }).subscribe((datosInternet)=>{
      if(datosInternet){
        this.listaProductos = datosInternet
      }
    })
  }


}
