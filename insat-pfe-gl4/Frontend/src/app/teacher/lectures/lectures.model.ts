export class Lectures {
  id: number;
  title: string;
  description: string;
  domain: string;
  year: number;
  constructor(lectures) {
    {
      this.id = lectures.id || this.getRandomID();
      this.title = lectures.title || '';
      this.description = lectures.description || '';
      this.domain = lectures.domain || '';
      this.year = lectures.year || 2020;
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
