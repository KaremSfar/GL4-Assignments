import {Component, Input, OnInit} from '@angular/core';
import { Camp } from "../../shared/camp";

@Component({
  selector: 'app-camp-site',
  templateUrl: './camp-site.component.html',
  styleUrls: ['./camp-site.component.css']
})
export class CampSiteComponent implements OnInit {

  @Input()
  camp: Camp;

  constructor() { }

  ngOnInit() {
  }

}
