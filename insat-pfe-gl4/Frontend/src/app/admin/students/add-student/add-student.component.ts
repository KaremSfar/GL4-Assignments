import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.sass']
})
export class AddStudentComponent {
  stdForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.stdForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      rollNo: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      mobile: ['', [Validators.required]],
      department: [''],
      dob: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
