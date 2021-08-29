import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatprogressComponent } from './statprogress.component';

describe('StatprogressComponent', () => {
  let component: StatprogressComponent;
  let fixture: ComponentFixture<StatprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
