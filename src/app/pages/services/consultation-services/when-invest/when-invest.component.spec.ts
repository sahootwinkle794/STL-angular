import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenInvestComponent } from './when-invest.component';

describe('WhenInvestComponent', () => {
  let component: WhenInvestComponent;
  let fixture: ComponentFixture<WhenInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhenInvestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhenInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
