import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiproductsComponent } from './multiproducts.component';

describe('MultiproductsComponent', () => {
  let component: MultiproductsComponent;
  let fixture: ComponentFixture<MultiproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
