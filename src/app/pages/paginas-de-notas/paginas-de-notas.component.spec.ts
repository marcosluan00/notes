import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasDeNotasComponent } from './paginas-de-notas.component';

describe('PaginasDeNotasComponent', () => {
  let component: PaginasDeNotasComponent;
  let fixture: ComponentFixture<PaginasDeNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasDeNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginasDeNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
