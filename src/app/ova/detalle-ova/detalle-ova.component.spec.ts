import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOvaComponent } from './detalle-ova.component';

describe('DetalleOvaComponent', () => {
  let component: DetalleOvaComponent;
  let fixture: ComponentFixture<DetalleOvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleOvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
