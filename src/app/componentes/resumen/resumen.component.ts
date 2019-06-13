import { Component, OnInit, Input } from '@angular/core';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  @Input () show:boolean;

  constructor(private idiomaSerice:IdiomaService) { }

  ngOnInit() {
  } 

  if (show){
    console.log(show)

  }

}
