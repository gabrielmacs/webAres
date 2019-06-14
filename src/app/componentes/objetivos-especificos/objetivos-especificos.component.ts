import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objetivos-especificos',
  templateUrl: './objetivos-especificos.component.html',
  styleUrls: ['./objetivos-especificos.component.scss']
})
export class ObjetivosEspecificosComponent implements OnInit {

  
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
