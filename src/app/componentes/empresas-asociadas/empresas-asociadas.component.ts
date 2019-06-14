import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empresas-asociadas',
  templateUrl: './empresas-asociadas.component.html',
  styleUrls: ['./empresas-asociadas.component.scss']
})
export class EmpresasAsociadasComponent implements OnInit {
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
