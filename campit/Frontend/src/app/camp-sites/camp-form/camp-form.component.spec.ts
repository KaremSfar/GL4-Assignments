import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampFormComponent } from './camp-form.component';

describe('CampFormComponent', () => {
  let component: CampFormComponent;
  let fixture: ComponentFixture<CampFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
