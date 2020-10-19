import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAvailableCourseListComponent } from './student-available-course-list.component';

describe('StudentAvailableCourseListComponent', () => {
  let component: StudentAvailableCourseListComponent;
  let fixture: ComponentFixture<StudentAvailableCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAvailableCourseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAvailableCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
