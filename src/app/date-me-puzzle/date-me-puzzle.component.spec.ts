import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMePuzzleComponent } from './date-me-puzzle.component';

describe('DateMePuzzleComponent', () => {
  let component: DateMePuzzleComponent;
  let fixture: ComponentFixture<DateMePuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMePuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
