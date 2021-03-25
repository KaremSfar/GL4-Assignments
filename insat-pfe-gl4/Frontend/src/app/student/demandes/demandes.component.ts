import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.sass']
})
export class DemandesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  register: FormGroup;
  ngOnInit() {
    this.register = this.fb.group({
      teacher: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get sf() { return this.register.controls; }

  onRegister() {
    //post the subject
    console.log(this.sf.teacher.value, this.sf.subject.value, this.sf.message.value);
  }

}
