import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsappComponent } from './settingsapp.component';

describe('SettingsappComponent', () => {
  let component: SettingsappComponent;
  let fixture: ComponentFixture<SettingsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
