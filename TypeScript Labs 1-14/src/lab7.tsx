function GreeetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

export default GreeetUser ;
export {addNumbers}
