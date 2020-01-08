abstract class Employee {
  tasks: string[];
  salary: number;
  constructor(public name: string, public age: number) {
    this.tasks = [];
  }
  work(): void {
    let task = this.tasks.shift();
    this.tasks.push(task);
    console.log(`${this.name} ${task}`);
  }

  protected getSalary(): number {
    return this.salary;
  }

  collectSalary(): void {
    console.log(
      `${this.name} received ${this.getSalary().toFixed(2)} this month.`
    );
  }
}

export class Junior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks = ["is working on a simple task."];
  }
}

export class Senior extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks = [
      "is working on a complicated task.",
      "is working on a complicated task.",
      "is taking time off work.",
      "is supervising junior workers."
    ];
  }
}

export class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    public divident: number=0
  ) {
    super(name, age);
    this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
  }
  protected getSalary() {
    return this.getSalary() + this.divident;
  }
}