function Person(name, weight, height, gender) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.gender = gender;
}

function PersonBuilder(name, gender) {
  this.name = name;
  this.gender = gender;

  this.setWeight = function (weight) {
    this.weight = weight;
    return this;
  };

  this.setHeight = function (height) {
    this.height = height;
    return this;
  };

  this.build = function () {
    return new Person(this.name, this.weight, this.height, this.gender);
  };
}

// const person1 = new Person("David", 5, 2.2, 'Male')
const person1 = new PersonBuilder('Jack', 'Male')
  .setWeight(60)
  .setHeight(170)
  .build();

console.log(person1);
