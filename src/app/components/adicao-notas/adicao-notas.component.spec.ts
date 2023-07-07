import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoNotasComponent } from './adicao-notas.component';

describe('AdicaoNotasComponent', () => {
  let component: AdicaoNotasComponent;
  let fixture: ComponentFixture<AdicaoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicaoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
