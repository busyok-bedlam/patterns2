class Singleton {
  constructor(president) {
    if(!!Singleton.instance) {
      return Singleton.instance;
    }
    this.president = {name: 'Bill', surname: 'Clinton'};
    Singleton.instance = this;
    return this;
  }
}

const president1 = new Singleton();
const president2 = new Singleton();
console.log(president1 === president2);
