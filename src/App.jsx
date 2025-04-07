import './App.css'
import { Component } from 'react'
import NEWComp from './NEWComp'
import DepartmentCardClass from './Lap1/class/DepartmentCardClass';
import DepartmentCardFunc from './Lap1/functional/DepartmentCardFunc';


export default class App extends Component {

state = {

    };


  render() 
  {
      return (
          <div> 
              {/* <NEWComp/>  */}
              <DepartmentCardClass/>
              <DepartmentCardFunc/>
          </div>
        );
  }
}

// export default App;

