import { formatDate } from '@angular/common';
import {Teachers} from "../teachers/all-teachers/teachers.model";
import {Students} from "../students/all-students/students.model";
export class Session {
  nbr: number;
  dob: Date;
  doe: Date;
  president: any;
  students: any;

  constructor(nbr: number, dob: Date, doe: Date, president: any, students: any) {
    this.nbr = nbr;
    this.dob = dob;
    this.doe = doe;
    this.president = president;
    this.students = students;
  }
}
