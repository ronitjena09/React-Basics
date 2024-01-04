import React from 'react';

const Events = () => {
    const printName = () => { //Normal Function - No Parameter, doesn't return any value
        console.log("Ronit")
    }

const showAlert = (message) => { //Function with parameter
    alert(message);
}
const getSum = (num1, num2) => { //Function with 2 parameters returning a value
    return num1 + num2;
}
const eventAlert = (event) => {   // function for calling a specific value that is clicked, i.e., (check line 39) it will show the value clicked in alert box
    alert(event.target.value)
}


  return (
    <div>
      <p>Hello This is Events Tab</p>
      <div className='row'>
        <div className='col-3'>
            <button className='btn btn-primary' onClick={printName}>My Name !</button>  {/*Created a button while calling the printName*/}
        </div>
        <div className='col-3'>
            <button className='btn btn-primary' onClick={showAlert}>Alert(Null Value)</button>   {/* created a button for alert with null value */}
        </div>
        <div className='col-3'>
            <button className='btn btn-primary' onClick={ () => { showAlert('This is an alert') }}>Alert(Some Value)</button> {/* created a button for alert with value */}
        </div>
        <div className='col-3'>
            <h1>{getSum(2,5)}</h1> {/* doesnt need a button nor an arrow function, it shows just by calling itself withing curly braces */}
        </div>

      </div>
      <div className='row'>
        <div className='col-3'>
            <select onChange={ (event) => {eventAlert(event)}}className='form-select'> {/* to send data*/}
                <option value=''>Select City</option>
                <option value='Berhampur'>Berhampur</option>
                <option value='Bhubaneswar'>Bhubaneswar</option>
                <option value='Cuttack'>Cuttack</option>
                <option value='Kendrapada'>Kendrapada</option>
            </select>
        </div>
      </div>
    </div>
  )
}

export default Events;
