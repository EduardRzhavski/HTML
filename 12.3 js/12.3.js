// const school = {
//     teachers: [
//       {
//         id: 1,
//         name: "Pinchas",
//         subjects: ["chemistry", "biology", "physics"],
//         students: [],
//         capacityLeft: 3,
//       },
//       {
//         id: 2,
//         name: "Williams",
//         subjects: ["history", "ethics"],
//         students: [],
//         capacityLeft: 2,
//       },
//     ],
//     students: [
//       {
//         id: 10,
//         name: "Jennifer",
//         age: 20,
//       },
//       {
//         id: 11,
//         name: "Howard",
//         age: 23,
//       },
//       {
//         id: 12,
//         name: "Old-Timmy",
//         age: 86,
//       },
//       {
//         id: 13,
//         name: "Houston",
//         age: 21,
//       },
//     ],
    
//     findPerson(type, id) {
//       if (type === "teacher") {
//         return this.teachers.find((teacher) => teacher.id === id);
//       } else if (type === "student") {
//         return this.students.find((student) => student.id === id);
//       } else {
//         return null;
//       }
//     },
//   };
  
//   const foundTeacher = school.findPerson("teacher", 1);
//   console.log(foundTeacher);
  
//   const foundStudent = school.findPerson("student", 11);
//   console.log(foundStudent);

//   

// const school = {
//     teachers: [
//       {
//         id: 1,
//         name: "Pinchas",
//         subjects: ["chemistry", "biology", "physics"],
//         students: [],
//         capacityLeft: 3,
//       },
//       {
//         id: 2,
//         name: "Williams",
//         subjects: ["history", "ethics"],
//         students: [],
//         capacityLeft: 2,
//       },
//     ],
//     students: [
//       {
//         id: 10,
//         name: "Jennifer",
//         age: 20,
//       },
//       {
//         id: 11,
//         name: "Howard",
//         age: 23,
//       },
//       {
//         id: 12,
//         name: "Old-Timmy",
//         age: 86,
//       },
//       {
//         id: 13,
//         name: "Houston",
//         age: 21,
//       },
//     ],
    
//     assignStudent(studentId, subject) {
//       const availableTeachers = this.teachers.filter(
//         (teacher) => teacher.subjects.includes(subject) && teacher.capacityLeft > 0
//       );
  
//       if (availableTeachers.length === 0) {
//         console.log("Sorry, no available teachers left");
//         return;
//       }
  
//       const selectedTeacher = availableTeachers[0];
//       const student = this.students.find((student) => student.id === studentId);
  
//       if (student && selectedTeacher) {
//         selectedTeacher.students.push(student);
//         selectedTeacher.capacityLeft--;
//         console.log(
//           `Assigned ${student.name} to ${selectedTeacher.name} for ${subject}`
//         );
//       } else {
//         console.log("Student or teacher not found");
//       }
//     },
//   };
  
//   school.assignStudent(10, "biology");
//   school.assignStudent(11, "history");
//   school.assignStudent(12, "chemistry");
  
//   

const school = {
    teachers: [
      {
        id: 1,
        name: "Pinchas",
        subjects: ["chemistry", "biology", "physics"],
        students: [],
        capacityLeft: 3,
      },
      {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
      },
    ],
    students: [
      {
        id: 10,
        name: "Jennifer",
        age: 20,
      },
      {
        id: 11,
        name: "Howard",
        age: 23,
      },
      {
        id: 12,
        name: "Old-Timmy",
        age: 86,
      },
      {
        id: 13,
        name: "Houston",
        age: 21,
      },
    ],
    
    assignTeachersSubject(teacherId, newSubject) {
      const teacher = this.teachers.find((teacher) => teacher.id === teacherId);
  
      if (teacher) {
        if (!teacher.subjects.includes(newSubject)) {
          teacher.subjects.push(newSubject);
          console.log(`${teacher.name} is now teaching ${newSubject}`);
        } else {
          console.log(`${teacher.name} already teaches ${newSubject}`);
        }
      } else {
        console.log("Teacher not found");
      }
    },
  };
  
  school.assignTeachersSubject(1, "history"); 
  school.assignTeachersSubject(2, "history");
  school.assignTeachersSubject(3, "english");

  