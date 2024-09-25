function studentGrade(obj) {
  // Write code here
  let topStudentsData = '';

  obj.map(({ grade, students }) => {
    let maxMarks = -Infinity;
    let topStudent = '';

    students.map(({ name, marks }, i) => {
      let sum = 0;

      marks.map((num) => sum += num);

      if(sum > maxMarks) {
        maxMarks = sum;
        topStudent = name;
      }
    });

    topStudentsData += `${grade}-${topStudent}-${maxMarks}\n`
  });

  return topStudentsData;
}

const studentObj = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] },
    ],
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] },
    ],
  },
];

const studentGradeMarks = studentGrade(studentObj);
console.log(studentGradeMarks);
