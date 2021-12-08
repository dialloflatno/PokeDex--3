import React  from "react"; 
import Display from './Display';
import  Navigator  from './Navigator';
import './App.css';
import AddNew from "./AddNew";



function App() {
  return (
    <div className="App">

     <div className = "contianer">
       <div classname = "global">
        <Navigator />
        </div>
        <div className = "Poke_field"/>
        {/* <Display /> */}
     </div>
     <AddNew/>
       
    
    </div>
  );
}

export default App;
