import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socios-academicos',
  templateUrl: './socios-academicos.component.html',
  styleUrls: ['./socios-academicos.component.scss']
})
export class SociosAcademicosComponent implements OnInit {
  @Input () ingles:boolean;
  constructor() { }

  ngOnInit() {
  }

}
