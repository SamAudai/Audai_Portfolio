import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPortfolioComponent } from './item-portfolio.component';

describe('ItemPortfolioComponent', () => {
  let component: ItemPortfolioComponent;
  let fixture: ComponentFixture<ItemPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPortfolioComponent]
    });
    fixture = TestBed.createComponent(ItemPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
