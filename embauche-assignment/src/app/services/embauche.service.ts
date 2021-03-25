import { Injectable } from '@angular/core';
import { Personne } from '../cv/models/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes: Personne[] = [];

  constructor() { }

  addPersonne(personne: Personne) {
    this.personnes.push(personne);
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }

}
