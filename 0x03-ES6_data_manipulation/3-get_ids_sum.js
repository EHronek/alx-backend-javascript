export default function getStudentIdsSum(students) {
  return students.reduce(
    (prevStudent, currentStudent) => prevStudent.id || prevStudent + currentStudent.id, 0,
  );
}
