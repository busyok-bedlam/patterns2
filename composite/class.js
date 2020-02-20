class Container {
  #children;
  #cost;
  constructor(cost, children = null) {
    this.#children = children;
    this.#cost = cost;
  }
  getChildren() {
    if(this.children) {
      return this.children;
    }
    return null;
  }

  calculate() {
    if(this.getChildren()) {
      return this.children.reduce((accum, curr) => { 
        return accum + curr.calculate();
      }, 0);
    } else {
      return this.cost;
    }
  }
}
