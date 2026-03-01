interface Student {
  name: string;
  marks: number;
}
function StudentList() {
  const students: Student[] = [
    { name: "Shanker", marks: 85 },
    { name: "Ravi", marks: 78 },
    { name: "Anu", marks: 92 },
  ];
  return (
    <div>
      <h3>Student List</h3>
      {students.map((student, index) => (
        <p key={index}>
          Name: {student.name}, Marks: {student.marks}
        </p>
      ))}
    </div>
  );
}
type PointType = {
  x: number;
  y: number;
};
interface PointInterface {
  x: number;
  y: number;
}
function PrintPoint({ point }: { point: PointType | PointInterface }) {
  return (
    <div>
      <h3>Point</h3>
      <p>X: {point.x}</p>
      <p>Y: {point.y}</p>
    </div>
  );
}
export default StudentList
export {PrintPoint}