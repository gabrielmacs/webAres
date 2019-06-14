import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temas-cientificos',
  templateUrl: './temas-cientificos.component.html',
  styleUrls: ['./temas-cientificos.component.scss']
})
export class TemasCientificosComponent implements OnInit {
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
