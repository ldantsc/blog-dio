import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLatestComponent } from './card-latest.component';

describe('CardLatestComponent', () => {
  let component: CardLatestComponent;
  let fixture: ComponentFixture<CardLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLatestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
