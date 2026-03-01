function CalculateSquare({ a }: { a: number }) {
  return (
    <div>
      Square: {a * a}
      <br />
      Is Even: {a % 2 === 0 ? "True" : "False"}
    </div>
  );
}

function IsEven(a: number): boolean {
  return a % 2 === 0;
}

export default CalculateSquare;
export { IsEven };
