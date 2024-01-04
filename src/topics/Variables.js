import React, { useState } from 'react'

const Variables = () => {
 //for variables whose values cannot be changed
 let cat = "ReactJS";
 const dog = "ReactJS";
 // for variables whose values can be changed => using State
 let [studentName, setStudentName] = useState('Ronit'); //for string type
 let [rollNumber, setRollNumber] = useState(202010212); // for Integer type
 let [recentDate, setRecentDate] = useState(new Date()); // for date
 let [isActive, setIsActive] = useState(); //for boolean type









  return (
    <div><p>Hi from Variables</p></div>
  )
}

export default Variables;