class Container {
  #children
  #cost
  constructor(children = null, cost = null) {
    this.#children = children;
    this.#cost = cost;
  }
  getChildren() {
    if(this.#children) {
      return this.#children;
    }
    return null;
  }

  calculate() {
    if(this.getChildren()) {
      return this.#children.reduce((accum, curr) => { 
        return accum + curr.calculate();
      }, 0);
    } else {
      return this.#cost;
    }
  }
}

let container = new Container([new Container(null,5), new Container([new Container(null, 20),new Container(null, 20), new Container([new Container(null, 50)])])]);
console.log(container.calculate());
