import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasCientificosComponent } from './temas-cientificos.component';

describe('TemasCientificosComponent', () => {
  let component: TemasCientificosComponent;
  let fixture: ComponentFixture<TemasCientificosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasCientificosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasCientificosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
