import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Personne } from 'src/app/cv/models/personne';
import { CvService } from 'src/app/services/cv.service';
import { EmbaucheService } from 'src/app/services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  @Input() personne: Personne = null;

  constructor(private embaucheService: EmbaucheService) { }


  ngOnInit() {
  }

  getPersonnes(): Personne[] {
    return this.embaucheService.getPersonnes();
  }


}
