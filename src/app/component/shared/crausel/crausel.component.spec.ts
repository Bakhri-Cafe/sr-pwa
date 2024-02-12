import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrauselComponent } from './crausel.component';

describe('CrauselComponent', () => {
  let component: CrauselComponent;
  let fixture: ComponentFixture<CrauselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrauselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
