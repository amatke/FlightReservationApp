import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdustaniComponent } from './odustani.component';

describe('OdustaniComponent', () => {
  let component: OdustaniComponent;
  let fixture: ComponentFixture<OdustaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdustaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdustaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
