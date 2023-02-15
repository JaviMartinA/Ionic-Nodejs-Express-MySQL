import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public id:any;
  public productos:any;

  public nombre:any;
  public precio:any;
  public imagen:any;
  constructor(public api: ApiService) {this.take}
  ionViewDidEnter(){
    this.take();
  }
  take(){
    this.api.getProductos().subscribe(data=>{
      this.productos = data;
    });
  }
  delete(){
    this.api.http.delete("http://localhost:3000/api/"+this.id).subscribe(data=>{
      console.log(data);
      this.take();
    })
  }
ngOnInit(){
  this.take();
}
}
