import { useRef } from "react";

const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
type Direction = typeof Direction[keyof typeof Direction];

const Status = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
} as const;
type Status = typeof Status[keyof typeof Status];

function printStatusOrDirection(value: Direction | Status): string {
  if (typeof value === "number") {
    return Object.keys(Direction).find(
      (key) => Direction[key as keyof typeof Direction] === value
    )!;
  } else {
    return value;
  }
}

const EnumAndInputExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePrintInputValue = () => {
    const inputElement = inputRef.current as HTMLInputElement;
    if (inputElement) {
      console.log(inputElement.value);
    }
  };

  const myDirection: Direction = Direction.Left;
  const myStatus: Status = Status.SUCCESS;

  return (
    <div>
      <h2>Enum Example</h2>
      <p>{printStatusOrDirection(Direction.Up)}</p>
      <p>{printStatusOrDirection(Status.FAILED)}</p>
      <p>{printStatusOrDirection(myDirection)}</p>
      <p>{printStatusOrDirection(myStatus)}</p>

      <h2>Input Example</h2>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={handlePrintInputValue}>Print Input Value</button>
    </div>
  );
};

export default EnumAndInputExample;
