import {Component, Inject, Input, OnInit} from '@angular/core';
import { CAMPS } from "../shared/camps";
import { Camp } from "../shared/camp";
import {CampService} from "../services/camp.service";

@Component({
  selector: 'app-camp-sites',
  templateUrl: './camp-sites.component.html',
  styleUrls: ['./camp-sites.component.css']
})
export class CampSitesComponent implements OnInit {
  public camps: Camp[];
  errMess: string;


  constructor(private campService: CampService) { }

  ngOnInit() {
    this.campService.getCamps()
      .subscribe((camps)=> this.camps = camps,
          errmess => this.errMess = <any>errmess);
  }

  set CampsValue ( camp: Camp) {
    this.camps.push(camp);
  }

}
