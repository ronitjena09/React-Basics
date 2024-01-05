import React, { useState } from 'react';

const SetState = () => {
    let [studentName, setStudentName] = useState(''); //taking variable with no parameters
    let [rollNo, setRollNo] = useState(); //taking variable with no parameters
    let [empObj, setEmpObj] = useState({empName: '', empCity: '',empId: ''})

    const changeStudentName = (event) => {
        debugger; //to debug the code in real time
        const textValue = event.target.value;   //taking the value of event from debugger
        setStudentName(textValue)   //applying value by taking name from textvalue to setstudentname and then to student name
    }
    const changeRollNo = (event) => { // created a variable with event as return type parameter
        debugger;
        const numValue = event.target.value; //setting the numvalue as the value of the event's target
        setRollNo(numValue) //putting the value of event in setrollno, changing th evalue one by one
    }
    //To set different values for many values in an object(old method)
    const changeEmpName = (event) => {
        setEmpObj(prevState => ({ ...prevState, empName: event.target.value }))
    }
    const changeEmpCity = (event) => {
        setEmpObj(prevState =>( { ...prevState, empCity: event.target.value}))
    }
    const changeEmpId = (event) => {
        setEmpObj(prevState =>( { ...prevState, empId: event.target.value}))
    }
    //To set different values for many variables in an object(new method)
    const EmployeeObject = (event, field) => {
        setEmpObj((prevState => ({ ...prevState, [field]: event.target.value})))
    }

    let [cityList, setCityList] = useState(['', '']); //creating an array for storing city names
    let [cityName, setCityName] = useState(); //initializing city name
    const changeCityName = (event) => { //function to take input from user
        setCityName(event.target.value)
    }
    const addCity = (event) => { //function to store user input in the array
        setCityList(prevArray => ([...prevArray, cityName])) 
    }


  return (
    <div>
        <div className='row'>
            <div className='col-2'>
                <input type='text' onChange={(event) => {changeCityName(event)}} placeholder='Enter City' className='form-control' /> 
            </div>
            <div className='col-2'>
                <input type='button' onClick={addCity} className='btn-btn-success' value='Add City' />
            </div>
            <div className='col-3'>
                {cityList}
            </div>
        </div>
        <h5>{empObj.empName} - {empObj.empCity} - {empObj.empId} </h5> {/* To display the updated name */}
        <div className='row'>
            <div className='col-2'>
                <input type='text' onChange={(event) => {EmployeeObject(event, 'empName')}} placeholder='Enter Employee Name' className='form-control' />
            </div>
            <div className='col-2'>
                <input type='text' onChange={(event) => {EmployeeObject(event, 'empCity')}} placeholder='Enter Employee City' className='form-control' />
            </div>
            <div className='col-2'>
                <input type='num' onChange={(event) => {EmployeeObject(event, 'empId')}}placeholder='Enter Employee ID' className='form-control' />
            </div>
        </div>
        <div className='row'>
            <div className='col-2'>
             StudentName - {studentName}
            </div>
        </div>
        <div className='row'>
            <div className='col-2'>
                <input type='text' onChange={(event) => {changeStudentName(event)}}placeholder='Enter Name' className='form-control' /> {/* for creating a text area and checking wthere the function changestudent name can actually work as per the function */}
            </div>
        </div>
        <div className='row'>
            <div className='col-2'>
             Roll No - {rollNo}
            </div>
        </div>
        <div className='row'>
            <div className='col-2'>
                <input type='num' onChange={(event) => {changeRollNo(event)}} placeholder='Enter Roll Number' className='form-control' />
            </div>
        </div>
    </div>
  )
}

export default SetState;
