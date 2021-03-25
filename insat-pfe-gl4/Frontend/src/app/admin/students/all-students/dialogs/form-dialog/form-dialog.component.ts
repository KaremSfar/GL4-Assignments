import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { StudentsService } from '../../students.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Students } from '../../students.model';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  stdForm: FormGroup;
  students: Students;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public studentsService: StudentsService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.students.name;
      this.students = data.students;
    } else {
      this.dialogTitle = 'Ajouter un étudiant';
      this.students = new Students({});
    }
    this.stdForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Ce champ est obligatoire'
      : this.formControl.hasError('email')
      ? 'Cet email n\'est pas valide'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.students.id],
      img: [this.students.img],
      name: [this.students.name],
      email: [
        this.students.email,
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      gender: [this.students.gender],
      mobile: [this.students.mobile],
      department: [this.students.department],
      rollNo: [this.students.rollNo],
      dob: ['', [Validators.required]]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.studentsService.addStudents(this.stdForm.getRawValue());
  }
}
