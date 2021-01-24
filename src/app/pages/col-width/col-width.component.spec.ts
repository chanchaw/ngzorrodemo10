import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColWidthComponent } from './col-width.component';

describe('ColWidthComponent', () => {
  let component: ColWidthComponent;
  let fixture: ComponentFixture<ColWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
