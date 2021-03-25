import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.sass']
})
export class AddModalComponent implements OnInit {

  teachers: any;
  students: any;
  sessionForm: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.sessionForm = this.fb.group({
      number: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      doe: ['', [Validators.required]],
      president: ['', [Validators.required]],
      students: [''],
    });
  }

  getStudents() {
    this.httpClient.get('assets/data/students.json').subscribe(
      (data) => {
        this.students = data;
      }
    );
  }

  getTeachers() {
    this.httpClient.get('assets/data/teachers.json').subscribe(
      (data) => {
        this.teachers = data;
      }
    );
  }

  onSubmit() {
    console.log('Form Value', this.sessionForm.value);
  }

  ngOnInit(): void {
    this.getStudents();
    this.getTeachers();
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }


  onSubmitClick() {
    this.showNotification(
      'snackbar-success',
      'La soutenance a été créée !',
      'bottom',
      'center'
    );
    this.closeDialog();
  }
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }



}
