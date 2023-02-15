import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
public id:any;
public productos:any;

public nombre:any;
public precio:any;
public imagen:any;

  constructor(public api: ApiService) {}
  take(){
    this.api.getProductos().subscribe(data=>{
      this.productos = data;
    });
  }
  insert(){
    const producto={
      nombre: this.nombre,
      precio: this.precio,
      imagen: this.imagen
    };
    this.api.http.post('http://localhost:3000/api/', producto).subscribe(data=>{
      console.log(data);
    });
  }
  modify(){
    this.api.http.put("http://localhost:3000/api/"+this.id, 
    {"nombre":this.nombre, "precio":this.precio, "imagen":this.imagen}).subscribe(data=>{
      console.log(data);
    })
  }
}
