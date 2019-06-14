import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auspiciantes',
  templateUrl: './auspiciantes.component.html',
  styleUrls: ['./auspiciantes.component.scss']
})
export class AuspiciantesComponent implements OnInit {

  @Input() ingles:boolean;

  constructor() { }

  ngOnInit() {
  }

}
