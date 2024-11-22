import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOvaComponent } from './crear-ova.component';

describe('CrearOvaComponent', () => {
  let component: CrearOvaComponent;
  let fixture: ComponentFixture<CrearOvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearOvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
