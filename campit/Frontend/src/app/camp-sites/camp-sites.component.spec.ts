import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSitesComponent } from './camp-sites.component';

describe('CampSitesComponent', () => {
  let component: CampSitesComponent;
  let fixture: ComponentFixture<CampSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
