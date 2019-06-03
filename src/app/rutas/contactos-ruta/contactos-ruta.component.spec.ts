import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosRutaComponent } from './contactos-ruta.component';

describe('ContactosRutaComponent', () => {
  let component: ContactosRutaComponent;
  let fixture: ComponentFixture<ContactosRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
