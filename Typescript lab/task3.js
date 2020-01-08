"use strict";
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
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var task = this.tasks.shift();
        this.tasks.push(task);
        console.log(this.name + " " + task);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.collectSalary = function () {
        console.log(this.name + " received " + this.getSalary().toFixed(2) + " this month.");
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks = ["is working on a simple task."];
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks = [
            "is working on a complicated task.",
            "is working on a complicated task.",
            "is taking time off work.",
            "is supervising junior workers."
        ];
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, divident) {
        if (divident === void 0) { divident = 0; }
        var _this = _super.call(this, name, age) || this;
        _this.divident = divident;
        _this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.getSalary() + this.divident;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
