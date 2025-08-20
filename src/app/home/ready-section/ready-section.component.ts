import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ready-section',
  templateUrl: './ready-section.component.html',
  styleUrl: './ready-section.component.scss'
})
export class ReadySectionComponent {

 contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectDescription: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Replace with actual API call
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}