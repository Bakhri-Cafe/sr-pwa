import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingMultiSelectComponent } from './floating-multi-select.component';

describe('FloatingMultiSelectComponent', () => {
  let component: FloatingMultiSelectComponent;
  let fixture: ComponentFixture<FloatingMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingMultiSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
