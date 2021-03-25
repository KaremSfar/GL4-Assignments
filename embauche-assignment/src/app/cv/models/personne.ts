export class Personne {

  constructor(
    public id: number = 0,
    public name: string = '',
    public firstname: string = '',
    public job: string = '',
    public cin: number = 0,
    public age: number = 0,
    public path: string = ''
  ) {
    this.age = age;
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.cin = cin;
    this.path = path;
  }

}
