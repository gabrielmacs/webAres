import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosEspecificosComponent } from './objetivos-especificos.component';

describe('ObjetivosEspecificosComponent', () => {
  let component: ObjetivosEspecificosComponent;
  let fixture: ComponentFixture<ObjetivosEspecificosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetivosEspecificosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivosEspecificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
