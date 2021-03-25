import { Component, OnInit } from '@angular/core';
import {Teachers} from "../../teachers/all-teachers/teachers.model";
import {Students} from "../../students/all-students/students.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.sass']
})
export class AddSessionComponent implements OnInit {

  teachers: any;
  students: any;
  sessionForm: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
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

}
