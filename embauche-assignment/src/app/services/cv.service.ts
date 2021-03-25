import { Injectable } from '@angular/core';
import { Personne } from '../cv/models/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personneList: Personne[] = [
    {id: 1, age: 25, cin: 25, firstname : 'alou', name: 'alouuu', job: 'none lol', path: 'ks.jpg' },
    {id: 2, age: 26, cin: 24, firstname : 'aaaa', name: 'louuuuu', job: 'none lol', path: 'kss.jpg' }
  ];

  getPersonnes(): Personne[] {
    return this.personneList;
  }

  getPersonne(id: number): Personne {
    return this.personneList.find( x => x.id === id);
  }

  constructor() { }
}
