import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBreakfastComponent } from './products-breakfast.component';

describe('ProductsBreakfastComponent', () => {
  let component: ProductsBreakfastComponent;
  let fixture: ComponentFixture<ProductsBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBreakfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
