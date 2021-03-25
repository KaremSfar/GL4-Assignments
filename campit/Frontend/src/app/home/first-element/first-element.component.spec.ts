import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstElementComponent } from './first-element.component';

describe('FirstElementComponent', () => {
  let component: FirstElementComponent;
  let fixture: ComponentFixture<FirstElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
