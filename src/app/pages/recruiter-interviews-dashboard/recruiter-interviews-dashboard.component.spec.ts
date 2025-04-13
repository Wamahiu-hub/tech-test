import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterInterviewsDashboardComponent } from './recruiter-interviews-dashboard.component';

describe('RecruiterInterviewsDashboardComponent', () => {
  let component: RecruiterInterviewsDashboardComponent;
  let fixture: ComponentFixture<RecruiterInterviewsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruiterInterviewsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterInterviewsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
