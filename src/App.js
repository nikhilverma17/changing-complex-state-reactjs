import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email:""
  });

  function handleChange(event) {

    const { value, name } = event.target

    setFullName(prevValue => {
      if (name === "fname") {
        return {
          fName: value,
          lName: prevValue.lName,
          email:prevValue.email
 
        }
      }
      else if (name === "lname") {
        return {
          fName: prevValue.fName,
          lName: value,
          email:prevValue.email
        }
      }else if(name==="email"){
        return{
          fName: prevValue.fName,
          lName: prevValue.lName,
          email:value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>hello {fullName.fName} {fullName.lName} </h1>
      <input onChange={handleChange} name="fname" type="text" placeholder="First Name" value={fullName.fName}></input>
      <input onChange={handleChange} name="lname" type="text" placeholder="Last Name" value={fullName.lName}></input>
      <p>{fullName.email}</p>
      <input onChange={handleChange} name="email" type="text" placeholder="Email" value={fullName.email}></input>
      <button>submit</button>
    </div>
  );
}

export default App;
