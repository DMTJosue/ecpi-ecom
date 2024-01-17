import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsPageComponent } from './carts-page.component';

describe('CartsPageComponent', () => {
  let component: CartsPageComponent;
  let fixture: ComponentFixture<CartsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
