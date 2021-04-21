import { Component, OnInit } from '@angular/core';
import { CategoriaSeleccionadaService } from '../categoria-seleccionada.service';
import { ProductosApiService } from '../productos-api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  catego: any = '';
  productos: any = '';
  productosCatego: any = '';
  constructor(private ServicioCategoria: CategoriaSeleccionadaService,private ProductosApi: ProductosApiService) { }

  ngOnInit(): void {
    this.getDatos();
    this.getCategoria();
  }

  getCategoria(){
    this.ServicioCategoria.obtenerCategoria();
  }

  getDatos(){
    this.ProductosApi.getDatos().subscribe((res) => {
      this.productos = res;
      this.seleccinarProductos();
    });
  }

  seleccinarProductos(){
  
    for (let i = 0; i < this.productos.length; i++) {
      console.log(this.productos[i].id);
      if (this.productos[i].id==this.catego){
        for (let x = 0; x < this.productos[i].productos.length; x++) {
          this.productosCatego.push(this.productos[i].productos[x]); 
        }
      }
    }
    console.log(this.productosCatego);

  }


}
