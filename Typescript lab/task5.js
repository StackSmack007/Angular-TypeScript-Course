class Box {
    constructor() {
        this.container = [];
    }
    add(el) {
        this.container.push(el);
    }
    remove() {
        return this.container.pop();
    }
    get count() {
        return this.container.length;
    }
}
let box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
