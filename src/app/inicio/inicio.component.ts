import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosApiService } from '../productos-api.service';
import { CategoriaSeleccionadaService } from '../categoria-seleccionada.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  categorias: any;
  constructor(private ServicioCategoria: CategoriaSeleccionadaService,private ProductosApi: ProductosApiService, private router: Router) { }

  ngOnInit(): void {
    this.getDatos();
  }


    getDatos(){
      this.ProductosApi.getDatos().subscribe((res) => {
        this.categorias = res;
      });
    }
    goCategoria(idCategoria: string){
      this.ServicioCategoria.guardarCategoria(idCategoria);
      this.router.navigate(['productos']);
    }

  }
