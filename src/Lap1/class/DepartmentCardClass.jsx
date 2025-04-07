import * as React from "react"
// import './Depart.css'

export default class DepartmentCardClass extends React.Component{

    constructor(props){
        super(props)
        this.state={
            DepartMentName: "frontend",
            NumberOfStudents: 0,
            Courses: ["Java", "C#", "Python"]
            }
        }

        handleIncrement=()=>{
        this.setState((prevState)=>({
            ...prevState,
            NumberOfStudents:prevState.NumberOfStudents+1
        }))
        }
        restart=()=>{
            this.setState((prevState)=>({
             
                NumberOfStudents:prevState.NumberOfStudents=0
            }))
            }
    
    render(){
        return(
        <div className="container">
        <h2 className="dep">CLASS</h2>
        <h3 className="dep"> Number of Students: <span id="studentCount">{this.state.NumberOfStudents}</span></h3>
        <button className="animated-button" onClick={this.handleIncrement}>+ Increment</button>
        <button className="animated-button" onClick={this.restart}>Restart from 0</button>
        <h4 className="dep">The Department name is: {this.state.DepartMentName}</h4>
        </div>
        )
    }

    }