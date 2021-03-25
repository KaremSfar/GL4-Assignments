import { Component } from '@angular/core';
import { Personne } from './cv/models/personne';
import { CvService } from './services/cv.service';
import { EmbaucheService } from './services/embauche.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'embauche';

  selectedPersonne: Personne;



}
