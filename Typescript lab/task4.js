var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melon) {
        this.weight = weight;
        this.melon = melon;
        this.type = "not defined yet";
        this._elementIndex = melon.length * weight;
    }
    Melon.prototype.toString = function () {
        return "Element: " + this.type + "\nSort: " + this.melon + "\nElement Index: " + this.elementIndex;
    };
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: true,
        configurable: true
    });
    return Melon;
}());
var WaterMelon = /** @class */ (function (_super) {
    __extends(WaterMelon, _super);
    function WaterMelon(weight, melon) {
        var _this = _super.call(this, weight, melon) || this;
        _this.type = "Water";
        return _this;
    }
    return WaterMelon;
}(Melon));
var FireMelon = /** @class */ (function (_super) {
    __extends(FireMelon, _super);
    function FireMelon(weight, melon) {
        var _this = _super.call(this, weight, melon) || this;
        _this.type = "Fire";
        return _this;
    }
    return FireMelon;
}(Melon));
var AirMelon = /** @class */ (function (_super) {
    __extends(AirMelon, _super);
    function AirMelon(weight, melon) {
        var _this = _super.call(this, weight, melon) || this;
        _this.type = "Air";
        return _this;
    }
    return AirMelon;
}(Melon));
var EarthMelon = /** @class */ (function (_super) {
    __extends(EarthMelon, _super);
    function EarthMelon(weight, melon) {
        var _this = _super.call(this, weight, melon) || this;
        _this.type = "Earth";
        return _this;
    }
    return EarthMelon;
}(Melon));
var MelonMelon = /** @class */ (function (_super) {
    __extends(MelonMelon, _super);
    function MelonMelon(weight, melon) {
        var _this = _super.call(this, weight, melon) || this;
        _this.melonOrder = ["Fire, Earth, Air"];
        return _this;
    }
    MelonMelon.prototype.morph = function () {
        this.melonOrder.push(this.type);
        this.type = this.melonOrder.shift();
    };
    return MelonMelon;
}(WaterMelon));
var watermelon = new WaterMelon(12.5, "Kingsize");
console.log(watermelon.toString());
//tsc --target es6 script.ts
