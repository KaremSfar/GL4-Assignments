import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddSubjectFormComponent } from './add-subject-form/add-subject-form.component';
import { AddTeacherFormComponent } from './add-teacher-form/add-teacher-form.component';

@Component({
  selector: 'app-my-subject',
  templateUrl: './my-subject.component.html',
  styleUrls: ['./my-subject.component.sass']
})
export class MySubjectComponent implements OnInit {

  fileUploadForm: FormGroup;

  subject ='sujet' ;
  teacher='approved';
  rapport=null;

  constructor(
    private dialogModel: MatDialog,
    fb: FormBuilder
    
  ) {
    this.fileUploadForm = fb.group({
      singleUpload: [''],
     
    });
  }

  ngOnInit(): void {
  }

  
  
  openAddSubjectDialog(): void {
    const dialogRef = this.dialogModel.open(AddSubjectFormComponent, {
      width: '640px',
      disableClose: true,
    });
  }

  openAddTeacherDialog(): void {
    const dialogRef = this.dialogModel.open(AddTeacherFormComponent, {
      width: '640px',
      disableClose: true,
    });
  }



}
