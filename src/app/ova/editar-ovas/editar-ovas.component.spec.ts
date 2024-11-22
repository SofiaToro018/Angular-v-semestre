import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOvasComponent } from './editar-ovas.component';

describe('EditarOvasComponent', () => {
  let component: EditarOvasComponent;
  let fixture: ComponentFixture<EditarOvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarOvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
