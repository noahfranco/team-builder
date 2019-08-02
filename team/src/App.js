import React, { useState } from 'react';
import './App.css';
import TeamMemberList from "./components/TeamMemberList.js"
import Form from "./components/Form.js"


function App() {

  const [members, setMembers] = useState([])

  return(
<div className="App">
  <div> 
    <h2> Become Part Of The Team </h2> 
    <Form setMembers={ setMembers }/> 
    <TeamMemberList members={ members } /> 
  </div> 
</div>

  );
};

export default App;
