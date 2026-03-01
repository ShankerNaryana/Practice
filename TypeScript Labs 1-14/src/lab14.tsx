import React from "react";

class Student3 {
  public name: string;
  public age: number;
  public readonly id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  getInfo() {
    return { name: this.name, age: this.age, id: this.id };
  }
}

const Task3: React.FC = () => {
  const student = new Student3("Charlie", 21, 5001);
  const info = student.getInfo();
  return (
    <div>
      <h2>Task 3: Readonly Property</h2>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>ID: {info.id}</p>
    </div>
  );
};
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): string {
    return "Woof! Woof!";
  }
}

const Task4: React.FC = () => {
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy", "Golden Retriever");

  return (
    <div>
      <h2>Task 4: Inheritance</h2>
      <p>Animal Name: {animal.name}</p>
      <p>Animal Sound: {animal.makeSound()}</p>

      <p>Dog Name: {dog.name}</p>
      <p>Dog Breed: {dog.breed}</p>
      <p>Dog Sound: {dog.makeSound()}</p>
    </div>
  );
};

export default Task3;

export {Task4};
