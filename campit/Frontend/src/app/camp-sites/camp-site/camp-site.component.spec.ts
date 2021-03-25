import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampSiteComponent } from './camp-site.component';

describe('CampSiteComponent', () => {
  let component: CampSiteComponent;
  let fixture: ComponentFixture<CampSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
