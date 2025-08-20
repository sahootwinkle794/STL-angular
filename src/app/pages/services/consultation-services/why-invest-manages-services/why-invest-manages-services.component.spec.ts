import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInvestManagesServicesComponent } from './why-invest-manages-services.component';

describe('WhyInvestManagesServicesComponent', () => {
  let component: WhyInvestManagesServicesComponent;
  let fixture: ComponentFixture<WhyInvestManagesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyInvestManagesServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyInvestManagesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
