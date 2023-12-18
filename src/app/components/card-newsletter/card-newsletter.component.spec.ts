import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewsletterComponent } from './card-newsletter.component';

describe('CardNewsletterComponent', () => {
  let component: CardNewsletterComponent;
  let fixture: ComponentFixture<CardNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
