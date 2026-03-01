import React from "react";
class Student1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return { name: this.name, age: this.age };
  }
}
const Task1: React.FC = () => {
  const student = new Student1("Alice", 20);
  const info = student.getInfo();
  return (
    <div>
      <h2>Task 1: Basic Class & Constructor</h2>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
    </div>
  );
};
class Student2 {
  public name: string;      // public property
  private rollNo: number;    // private property
  age: number;

  constructor(name: string, age: number, rollNo: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  }

  showRollNo() {
    return this.rollNo;
  }

  getInfo() {
    return { name: this.name, age: this.age };
  }
}

const Task2: React.FC = () => {
  const student = new Student2("Bob", 22, 101);
  const info = student.getInfo();
  const rollNo = student.showRollNo();

  return (
    <div>
      <h2>Task 2: Access Modifiers</h2>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>Roll No: {rollNo}</p>

    </div>
  );
};

export default Task1;

export {Task2};
