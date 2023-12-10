import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterDashboardComponent } from './call-center-dashboard.component';

describe('CallCenterDashboardComponent', () => {
  let component: CallCenterDashboardComponent;
  let fixture: ComponentFixture<CallCenterDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallCenterDashboardComponent]
    });
    fixture = TestBed.createComponent(CallCenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
