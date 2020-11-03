export class Quotes {
  public showDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public description: string,
    public upVote: number, 
    public downVote: number,
    public uplodingDate: Date){
    this.showDescription=false;
  };
}