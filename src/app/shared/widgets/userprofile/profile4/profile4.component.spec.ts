import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile4Component } from './profile4.component';

describe('Profile4Component', () => {
  let component: Profile4Component;
  let fixture: ComponentFixture<Profile4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
