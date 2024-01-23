import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGroupComponent } from './blog-group.component';

describe('BlogGroupComponent', () => {
  let component: BlogGroupComponent;
  let fixture: ComponentFixture<BlogGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
