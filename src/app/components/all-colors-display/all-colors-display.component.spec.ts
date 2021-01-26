import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllColorsDisplayComponent } from './all-colors-display.component';

describe('AllColorsDisplayComponent', () => {
  let component: AllColorsDisplayComponent;
  let fixture: ComponentFixture<AllColorsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllColorsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllColorsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
