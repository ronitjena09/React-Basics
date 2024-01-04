import React, { useState } from 'react'

const Variables = () => {
 //for variables whose values cannot be changed
 let cat = "ReactJS";
 const dog = "by Ronit";
 // for variables whose values can be changed => using State
 let [studentName, setStudentName] = useState('Ronit'); //for string type
 let [rollNumber, setRollNumber] = useState(202010212); // for Integer type
 let [recentDate, setRecentDate] = useState(new Date()); // for date
 let [isActive, setIsActive] = useState(true); //for boolean type

 //derived data type
 let [empObject, setEmpObject] = useState({empId:0, empName:'Ronit_Employer', empCity:'Berhampur',}); //object
 let [cityType, setCityType] = useState(['Berhampur','Bhubaneswar', 'Cuttack', 'Kendrapada']); //String array
 let [rollNo, setRollNo] = useState([10, 20, 30, 40, 50]); //Integer array


  return (
    <div><p>Hi from Variables
    <div className='row'>
      <div className='col'>
      {cat} - {dog}
      </div>
      <div className='col'>
        {studentName},{rollNumber},{recentDate.getDay()}-{recentDate.getMonth()+1}-{recentDate.getFullYear()}_{isActive ? 'true':'false'}
      </div>
      </div>
      <div>
      <div className='col'>
        {empObject.empName}, {/* to print object name */}
        {cityType}  {/* to print sring type ar */}
      </div> {/* NOTE: YOU CANT SHOW AN ENTIRE OBJECT !!! */}
    </div>
    </p></div>
  )
}

export default Variables;