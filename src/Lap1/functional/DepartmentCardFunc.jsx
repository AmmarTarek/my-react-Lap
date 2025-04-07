import React from 'react';
import { useState } from "react"
import './Depart2.css'

function DepartmentCardFunc() {
    const[NumberOfStudents, setCounter]= useState(0)
    const [DepartMentName, setDepartmentName] = useState("frontend");


    const handleIncrement=()=>{
        setCounter((counter)=>NumberOfStudents+1)

    }
    const restart=()=>{
        setCounter(0)
    }

    return (
        <div className="container">
            
            <h2 className="dep">FUNCTION</h2>
            <h3 className="dep"> Number of Students: <span id="studentCount">{NumberOfStudents}</span></h3>
            <button className="animated-button" onClick={handleIncrement}>+ Increment</button>
            <button className="animated-button" onClick={restart}>Restart from 0</button>
            <h5 className="dep">The Department name is: {DepartMentName}</h5>
        </div>
            
    );
}


export default DepartmentCardFunc;