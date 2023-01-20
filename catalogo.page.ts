import { Component, OnInit } from '@angular/core';
import {ApiProductosService} from './../../services/api-productos.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(
    public apiProducts : ApiProductosService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.apiProducts.traerProducts()
  }

}
