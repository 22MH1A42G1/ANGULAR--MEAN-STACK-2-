import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: false,
  templateUrl: './registration-form.html',
  styleUrls: ['./registration-form.css'],
})
export class RegistrationForm implements OnInit {
  registerForm!: FormGroup;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      }),
      email: ['', [Validators.required, Validators.email]]
    });
  }

}

function validateEmail(c: FormControl): any { 
  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zAZ]{2,5})$/; 
  return EMAIL_REGEXP.test(c.value) ? null : { 
    emailInvalid: {
      message: "Invalid Format!"
    } 
  }; 
} 