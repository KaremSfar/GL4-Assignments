import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-subject-form',
  templateUrl: './add-subject-form.component.html',
  styleUrls: ['./add-subject-form.component.sass']
})
export class AddSubjectFormComponent implements OnInit {

  public title: string = '';
  public domain: string = '';
  public addCusForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog,private httpClient: HttpClient ) {}
  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      title: [
        this.title,
        [Validators.required]
      ],
      domain: [
        this.domain,
        [Validators.required]
      ],
      description: [
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
    this.httpClient.post("",this.addCusForm.value).subscribe(
      (data)=>{},
      (error: HttpErrorResponse)=>{
        console.log(error);
      }
    )
    ;
    

  }
}

