import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrolledCourseListComponent } from './student-enrolled-course-list.component';

describe('StudentEnrolledCourseListComponent', () => {
  let component: StudentEnrolledCourseListComponent;
  let fixture: ComponentFixture<StudentEnrolledCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrolledCourseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrolledCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
