import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragColComponent } from './drag-col.component';

describe('DragColComponent', () => {
  let component: DragColComponent;
  let fixture: ComponentFixture<DragColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragColComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
