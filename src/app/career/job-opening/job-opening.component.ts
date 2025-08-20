import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrl: './job-opening.component.scss'
})
export class JobOpeningComponent {

   formData = {
    name: '',
    email: '',
    phone: '',
    position: ''
  };

  resumeFile: File | null = null;
  submitted = false;

  onFileSelected(event: any) {
    this.resumeFile = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    console.log('Application Submitted:', this.formData, this.resumeFile);
    alert("SUBMITED");
  }

}
