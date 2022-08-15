import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMeVideoComponent } from './date-me-video.component';

describe('DateMeVideoComponent', () => {
  let component: DateMeVideoComponent;
  let fixture: ComponentFixture<DateMeVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMeVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
