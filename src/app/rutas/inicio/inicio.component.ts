import { Component, OnInit, Input } from '@angular/core';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  show: boolean;
  

  constructor(private idiomaSerice:IdiomaService) {
    
  }
  ngOnInit(){
    this.show=this.idiomaSerice.getIdioma();

  }
  cambiarIdioma(){
    this.idiomaSerice.cambiarIdioma();
    this.show=this.idiomaSerice.getIdioma();
    
  }
}
