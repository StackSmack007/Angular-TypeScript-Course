abstract class Melon {
  protected type: string = "not defined yet";
  protected _elementIndex: number;
  constructor(public weight: number, public melon: string) {
    this._elementIndex = melon.length * weight;
  }
  toString() {
    return `Element: ${this.type}\nSort: ${this.melon}\nElement Index: ${this.elementIndex}`;
  }

 get elementIndex():number {
    return this._elementIndex;
  }
}

class WaterMelon extends Melon {
  constructor(weight: number, melon: string) {
    super(weight, melon);
    this.type = "Water";
  }
}

class FireMelon extends Melon {
  constructor(weight: number, melon: string) {
    super(weight, melon);
    this.type = "Fire";
  }
}

class AirMelon extends Melon {
  constructor(weight: number, melon: string) {
    super(weight, melon);
    this.type = "Air";
  }
}

class EarthMelon extends Melon {
  constructor(weight: number, melon: string) {
    super(weight, melon);
    this.type = "Earth";
  }
}

class MelonMelon extends WaterMelon {
  private melonOrder: string[] = ["Fire, Earth, Air"];
  constructor(weight: number, melon: string) {
    super(weight, melon);
  }
  morph(): void {
    this.melonOrder.push(this.type);
    this.type = this.melonOrder.shift();
  }
}
let watermelon: WaterMelon = new WaterMelon(12.5, "Kingsize");
console.log(watermelon.toString());

//tsc --target es6 script.ts