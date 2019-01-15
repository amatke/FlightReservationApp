import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAvionComponent } from './dodaj-avion.component';

describe('DodajAvionComponent', () => {
  let component: DodajAvionComponent;
  let fixture: ComponentFixture<DodajAvionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAvionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
