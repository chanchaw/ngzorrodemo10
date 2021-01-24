import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragRowComponent } from './drag-row.component';

describe('DragRowComponent', () => {
  let component: DragRowComponent;
  let fixture: ComponentFixture<DragRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
