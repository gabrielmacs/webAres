import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {

  @Input () show:boolean;

  constructor() { }

  ngOnInit() {
  }

}
