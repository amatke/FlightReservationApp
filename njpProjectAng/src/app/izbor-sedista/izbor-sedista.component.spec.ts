import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzborSedistaComponent } from './izbor-sedista.component';

describe('IzborSedistaComponent', () => {
  let component: IzborSedistaComponent;
  let fixture: ComponentFixture<IzborSedistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzborSedistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzborSedistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
