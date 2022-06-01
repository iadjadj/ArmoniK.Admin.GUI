import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@armonik.admin.gui/ui';
import { ClarityModule } from '@clr/angular';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        TranslateModule.forRoot(),
        ClarityModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains a h1', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should contains a section after h1', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1 + section')).toBeTruthy();
  });

  it('should contains a section with class "clr-row" after h1', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1 + section.clr-row')).toBeTruthy();
  });

  it('should contains "app-pages-dashboard-application-card" in a section after h1', () => {
    component.applications = [
      {
        _id: 'application_1',
      },
    ];
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector(
        'h1 + section > app-pages-dashboard-application-card'
      )
    ).toBeTruthy();
  });
});
