import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationItemComponent } from './organisation-item.component';

describe('OrganisationItemComponent', () => {
  let component: OrganisationItemComponent;
  let fixture: ComponentFixture<OrganisationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganisationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
