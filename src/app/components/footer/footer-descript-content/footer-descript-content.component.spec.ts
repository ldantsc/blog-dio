import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDescriptContentComponent } from './footer-descript-content.component';

describe('FooterDescriptContentComponent', () => {
  let component: FooterDescriptContentComponent;
  let fixture: ComponentFixture<FooterDescriptContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDescriptContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterDescriptContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
