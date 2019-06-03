import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  show: boolean=false;

  constructor() {

  }
  cambiarIdioma() {
    if(this.show){
      this.show=false;
      
      
    }else{
      this.show=true;
    }

    
  }

  getIdioma():boolean{
    return this.show;
  }

}
