import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';
import { CvService } from 'src/app/services/cv.service';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personne: Personne;

  constructor(private cvService: CvService,private embaucheService: EmbaucheService) {
    this.cvService = cvService;
    this.embaucheService = embaucheService;
  }

  ngOnInit() {
  }

  getPersonnes(): Personne[]{
    return this.cvService.getPersonnes();
  }

  selectPersonne(personne: Personne){
    this.personne = personne;
  }

  addEmbauch(personne: Personne) {
    this.embaucheService.addPersonne(personne);
  }

}
