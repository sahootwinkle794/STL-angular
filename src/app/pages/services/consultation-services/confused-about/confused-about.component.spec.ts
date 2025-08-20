import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusedAboutComponent } from './confused-about.component';

describe('ConfusedAboutComponent', () => {
  let component: ConfusedAboutComponent;
  let fixture: ComponentFixture<ConfusedAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfusedAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfusedAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
