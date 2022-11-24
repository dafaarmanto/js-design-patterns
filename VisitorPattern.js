function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

Employee.prototype = {
  getSalary: function () {
    return this.salary;
  },
  setSalary: function (sal) {
    this.salary = sal;
  },
  accept: function (visitor) {
    visitor(this);
  },
};

const john = new Employee('John', 5000);
console.log(john.getSalary());

john.accept(ExtraSalary);
console.log(john.getSalary());
