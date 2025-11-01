import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second } from './second';

describe('Second', () => {
  let component: Second;
  let fixture: ComponentFixture<Second>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Second]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
