import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragndropquizComponent } from './dragndropquiz.component';

describe('DragndropquizComponent', () => {
  let component: DragndropquizComponent;
  let fixture: ComponentFixture<DragndropquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragndropquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragndropquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
