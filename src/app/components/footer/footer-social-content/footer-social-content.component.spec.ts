import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialContentComponent } from './footer-social-content.component';

describe('FooterSocialContentComponent', () => {
  let component: FooterSocialContentComponent;
  let fixture: ComponentFixture<FooterSocialContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSocialContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSocialContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
