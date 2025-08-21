import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hello } from './hello';

describe('Hello', () => {
  let component: Hello;
  let fixture: ComponentFixture<Hello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hello]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hello);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
