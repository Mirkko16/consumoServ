import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumoServ';
  listaDeNoticias: any[]=[];
  loading = false;

  constructor(private _api: NoticiasService){

  }

  buscarNoticias(parametro: any){
    this.loading=true; 
    this.listaDeNoticias=[];   

    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(result=>{
        console.log(result);
        this.loading=false;
        this.listaDeNoticias=result.articles;
      });
      
    }, 1000);
    
  }

}
