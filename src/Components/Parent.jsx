import { useState } from "react";
import Child from "./Child";
import image1 from "./Images/rao rabi.jpg";
import image2 from "./Images/umer.png";
import image3 from "./Images/zohaib.png";
import image4 from "./Images/arham.png";

const Parent = () => {
  // data
  const initialStudents = [
    {
      imageUrl: image1,
      Name: "Rao Rabi",
      Age: 20,
      Gender: "Male",
    },
    {
      imageUrl: image2,
      Name: "Mian Umer",
      Age: 21,
      Gender: "Male",
    },
    {
      imageUrl: image3,
      Name: "Malik Zohaib",
      Age: 25,
      Gender: "Male",
    },
    {
      imageUrl: image4,
      Name: "Arham Ramay",
      Age: 22,
      Gender: "Male",
    },
  ];

  const [students, setStudents] = useState(initialStudents);

  //   to add new student
  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  //   update student data
  const updateStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  //   delete student data

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((item, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <>
      <Child
        data={students}
        addStudent={addStudent}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
      />
    </>
  );
};

export default Parent;
