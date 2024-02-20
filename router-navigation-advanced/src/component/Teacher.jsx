//import React from 'react'
import { useParams } from 'react-router-dom';

const teacherInformation=[
    {id:1, name:"Vraj Clerk",age:20},
    {id:2, name:"MS Dhoni",age:41},
    {id:3, name:"Ellyse Perry",age:33},

];
const Teacher = () => {
    const params = useParams();
    console.log("params:", params);
    //search teacher whose id is passed as route parameter in url 
    const currentTeacher = teacherInformation.find((teacher) => teacher.id === Number(params.teacherId));
    console.log("currentTeacher:", currentTeacher);
  return (
    <div>
       <h1> Information about teacher:{params.teacherId}</h1>

       {currentTeacher && (
        <>
            <p>Teacher name:{currentTeacher.name}</p>
            <p>Teacher Age:{currentTeacher.age}</p>
        </>
       )}
    </div>

  )
}

export default Teacher