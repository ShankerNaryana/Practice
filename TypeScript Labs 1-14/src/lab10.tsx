interface User {
  readonly id: number;
  name: string;
  age?: number;
}
function UserDetails(){
  const user: User = {
    id: 101,
    name: "Shanker",
    age: 21
  };
  return (
    <div>
      <h3>User Details</h3>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}
function CalculatorDemo() {
  const calculator: Calculator = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
  };
  return (
    <div>
      <h3>Calculator</h3>
      <p>Add: {calculator.add(10, 20)}</p>
      <p>Multiply: {calculator.multiply(10, 20)}</p>
    </div>
  );
}
export default UserDetails;
export {CalculatorDemo}