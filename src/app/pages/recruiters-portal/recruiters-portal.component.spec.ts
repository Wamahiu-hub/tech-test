import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersPortalComponent } from './recruiters-portal.component';

describe('RecruitersPortalComponent', () => {
  let component: RecruitersPortalComponent;
  let fixture: ComponentFixture<RecruitersPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitersPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitersPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
