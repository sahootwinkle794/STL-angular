import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyStlComponent } from './why-stl.component';

describe('WhyStlComponent', () => {
  let component: WhyStlComponent;
  let fixture: ComponentFixture<WhyStlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyStlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyStlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
