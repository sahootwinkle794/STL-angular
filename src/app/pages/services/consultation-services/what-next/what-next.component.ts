import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-what-next',
  standalone: false,
  // imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './what-next.component.html',
  styleUrl: './what-next.component.scss'
})
export class WhatNextComponent {


  consultationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.consultationForm = this.fb.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.consultationForm.valid) {
      console.log('Form Data:', this.consultationForm.value);
      alert('Your request has been submitted!');
      this.consultationForm.reset();
    } else {
      this.consultationForm.markAllAsTouched();
    }
  }

}
