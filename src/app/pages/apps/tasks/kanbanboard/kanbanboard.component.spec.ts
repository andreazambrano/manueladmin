import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanboardComponent } from './kanbanboard.component';

describe('KanbanboardComponent', () => {
  let component: KanbanboardComponent;
  let fixture: ComponentFixture<KanbanboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
