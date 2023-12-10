import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOpenTicketsComponent } from './view-open-tickets.component';

describe('ViewOpenTicketsComponent', () => {
  let component: ViewOpenTicketsComponent;
  let fixture: ComponentFixture<ViewOpenTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewOpenTicketsComponent]
    });
    fixture = TestBed.createComponent(ViewOpenTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
