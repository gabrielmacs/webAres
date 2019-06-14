import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
