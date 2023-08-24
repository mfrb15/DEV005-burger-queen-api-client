import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLunchComponent } from './products-lunch.component';

describe('ProductsLunchComponent', () => {
  let component: ProductsLunchComponent;
  let fixture: ComponentFixture<ProductsLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
