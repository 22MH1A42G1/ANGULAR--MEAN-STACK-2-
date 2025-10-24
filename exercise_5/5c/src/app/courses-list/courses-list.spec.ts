import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesList } from './courses-list';

describe('CoursesList', () => {
  let component: CoursesList;
  let fixture: ComponentFixture<CoursesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
