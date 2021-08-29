import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistviewComponent } from './dentistview.component';

describe('DentistviewComponent', () => {
  let component: DentistviewComponent;
  let fixture: ComponentFixture<DentistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
