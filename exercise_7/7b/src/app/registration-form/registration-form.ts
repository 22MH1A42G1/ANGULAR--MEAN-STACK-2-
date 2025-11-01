import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-registration-form',
  standalone: false,
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css',
})
export class RegistrationForm implements OnInit { 
  
  registerForm!: FormGroup; 
  submitted!:boolean; 

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
    }); 
  } 
} 
