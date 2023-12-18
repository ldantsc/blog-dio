import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailLinkComponent } from './more-detail-link.component';

describe('MoreDetailLinkComponent', () => {
  let component: MoreDetailLinkComponent;
  let fixture: ComponentFixture<MoreDetailLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDetailLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
