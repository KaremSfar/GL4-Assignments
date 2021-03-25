import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.sass']
})
export class AddTeacherFormComponent implements OnInit {

  public teacher: string = '';
  public addCusForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog,private httpClient: HttpClient ) {}
  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      teacher: [
        this.teacher,
        [Validators.required]
      ],
      message: [
        null, 
        [Validators.required]
      ]
    });
  }
  closeDialog(): void {
    this.dialog.closeAll();
  }
  onSubmitClick() {
    console.log('Form Value', this.addCusForm.value);
    this.closeDialog();
  }
}