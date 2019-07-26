import React, { useState } from 'react';
import './App.css';
import TeamMemberList from "./components/TeamMemberList.js"



function App() {

  const [members, setMembers] = useState([{name: "Noah", email: "Noahfra@gmail.com", role: "Developer" }])

  return(
<div className="App">
  <div> 
    <h2> Become Part Of The Team </h2> 
    <TeamMemberList members={ members } /> 
  </div> 
</div>

  );
};

export default App;
