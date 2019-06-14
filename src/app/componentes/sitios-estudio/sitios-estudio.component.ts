import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sitios-estudio',
  templateUrl: './sitios-estudio.component.html',
  styleUrls: ['./sitios-estudio.component.scss']
})
export class SitiosEstudioComponent implements OnInit {
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
