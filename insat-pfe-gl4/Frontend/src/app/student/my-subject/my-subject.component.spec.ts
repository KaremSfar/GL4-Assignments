import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubjectComponent } from './my-subject.component';

describe('MySubjectComponent', () => {
  let component: MySubjectComponent;
  let fixture: ComponentFixture<MySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
