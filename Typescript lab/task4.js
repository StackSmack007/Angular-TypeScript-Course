class Melon {
    constructor(weight, melon) {
        this.weight = weight;
        this.melon = melon;
        this.type = "not defined yet";
        this._elementIndex = melon.length * weight;
    }
    toString() {
        return `Element: ${this.type}\nSort: ${this.melon}\nElement Index: ${this.elementIndex}`;
    }
    get elementIndex() {
        return this._elementIndex;
    }
}
class WaterMelon extends Melon {
    constructor(weight, melon) {
        super(weight, melon);
        this.type = "Water";
    }
}
class FireMelon extends Melon {
    constructor(weight, melon) {
        super(weight, melon);
        this.type = "Fire";
    }
}
class AirMelon extends Melon {
    constructor(weight, melon) {
        super(weight, melon);
        this.type = "Air";
    }
}
class EarthMelon extends Melon {
    constructor(weight, melon) {
        super(weight, melon);
        this.type = "Earth";
    }
}
class MelonMelon extends WaterMelon {
    constructor(weight, melon) {
        super(weight, melon);
        this.melonOrder = ["Fire, Earth, Air"];
    }
    morph() {
        this.melonOrder.push(this.type);
        this.type = this.melonOrder.shift();
    }
}
let watermelon = new WaterMelon(12.5, "Kingsize");
console.log(watermelon.toString());
