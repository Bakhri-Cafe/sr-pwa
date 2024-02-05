import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingTextareaComponent } from './floating-textarea.component';

describe('FloatingTextareaComponent', () => {
  let component: FloatingTextareaComponent;
  let fixture: ComponentFixture<FloatingTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
