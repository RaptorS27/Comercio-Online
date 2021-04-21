import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaSeleccionadaService {
  categoriaSelecc : any = '';
  constructor() { }

  obtenerCategoria(){
    return this.categoriaSelecc;
  }
  guardarCategoria(categoria: string){
    this.categoriaSelecc = categoria;
  }

}

