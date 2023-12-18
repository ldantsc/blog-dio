import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactContentComponent } from './footer-contact-content.component';

describe('FooterContactContentComponent', () => {
  let component: FooterContactContentComponent;
  let fixture: ComponentFixture<FooterContactContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContactContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterContactContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
