import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMeYesComponent } from './date-me-yes.component';

describe('DateMeYesComponent', () => {
  let component: DateMeYesComponent;
  let fixture: ComponentFixture<DateMeYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMeYesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateMeYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
