import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForm } from './registration-form';

describe('RegistrationForm', () => {
  let component: RegistrationForm;
  let fixture: ComponentFixture<RegistrationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
