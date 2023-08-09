import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
   const [fullName,setFullName]=useState({
    fName:"",
    lName:""
  });
  function handleChange(event){
    const newValue=event.target.value;
    const inputName=event.target.name;
    setFullName(prevValue => {
      if(inputName==="fname")
      {return{
        fName:newValue,
        lName:prevValue.lName
      }}
      else if (inputName==="lname")
      {return{
        fName:prevValue.fName,
        lName:newValue
      }}
    })
  }
  
  return (
    <div className="container">
     <h1>hello {fullName.fName} {fullName.lName} </h1>
     <input onChange={handleChange} name="fname" type="text" placeholder="First Name"value={fullName.fName}></input>
     <input onChange={handleChange} name="lname" type="text" placeholder="Last Name"value={fullName.lName}></input>
     <button>submit</button>
    </div>
  );
}

export default App;
