import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosEstudioComponent } from './sitios-estudio.component';

describe('SitiosEstudioComponent', () => {
  let component: SitiosEstudioComponent;
  let fixture: ComponentFixture<SitiosEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
