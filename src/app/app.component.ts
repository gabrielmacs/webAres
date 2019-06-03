import { Component } from '@angular/core';
import { IdiomaService } from './servicios/idioma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ARES';

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
