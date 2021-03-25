import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Camp} from "../../shared/camp";
import { CAMPS} from "../../shared/camps";
import {ActivatedRoute, Params} from "@angular/router";
import {CampService} from "../../services/camp.service";
import {baseURL} from "../../shared/baseurl";
import {switchMap} from "rxjs/internal/operators/switchMap";
import {CampSitesComponent} from "../camp-sites.component";

@Component({
  selector: 'app-camp-form',
  templateUrl: './camp-form.component.html',
  styleUrls: ['./camp-form.component.css']
})
export class CampFormComponent implements OnInit {
  campForm: FormGroup;
  camp: Camp;
  campCopy: Camp;
  errMess: string;
  campIds : string[];
  prev: string;
  next: string;
  @Input('camps') public camps;

  @ViewChild('campform', { static: true }) campFormDirective;

  formErrors = {
    'name': '',
    'desc': '',
    'date': '',
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 2 characters long.',
      'maxlength':     'Name cannot be more than 50 characters long.'
    },
    'desc': {
      'required':      'Description is required.',
    },
    'date': {
      'required':      'Date is required.',
    },
  };

  constructor(
      private campService: CampService,
      private route: ActivatedRoute,
      private fb: FormBuilder,

  ) {
    this.createForm();
  }

  ngOnInit() {
    this.campService.getCampsIds()
      .subscribe((campId) => this.campIds = campId);
  }

  createForm() : void {
    this.campForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)] ],
      desc: ['', Validators.required ],
      date: ['', Validators.required ],
    });

    this.campForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    // this.route.params
    //   .pipe(switchMap((params: Params) => this.campService.getCamp(params['id'])))
    //   .subscribe(camp => { this.camp = camp; this.setPrevNext(camp.id); },
    //     errmess => this.errMess = <any>errmess );

    this.onValueChanged();

  }

  setPrevNext(campId: string) {
    const index = this.campIds.indexOf(campId);
    this.prev = this.campIds[(this.campIds.length + index - 1) % this.campIds.length];

    this.next = this.campIds[(this.campIds.length + index + 1) % this.campIds.length];
  }

  onValueChanged(data?: any) {
    if (!this.campForm) { return; }
    const form = this.campForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    console.log(this.campIds);
    this.camp = this.campForm.value;
    this.campCopy = this.campForm.value;
    this.campCopy.id = this.campIds.length.toString() ;
    this.camps.push(this.campCopy);
    this.campService.putCamp(this.campCopy)
      .subscribe(camp => {
          console.log(camp);
          this.camp = camp;
          this.campCopy= camp;
        },
        errmess => { this.camp = null;  this.errMess = <any>errmess; });
    console.log(this.camp);
    this.campForm.reset({
      name: '',
      desc: '',
      date: '',
    });
    // this.campFormDirective.resetForm();
  }

}
