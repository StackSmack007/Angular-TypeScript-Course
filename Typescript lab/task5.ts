class Box<T> {
  private container: T[] = [];

  add(el: T) {
    this.container.push(el);
  }
  remove(): T {
    return this.container.pop();
  }
  get count(): number {
    return this.container.length;
  }
}

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);

