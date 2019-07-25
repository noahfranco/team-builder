import React, { useState } from "react"; 
// import styling, { container } from "./styling"
 
function FormList() {

const [teamMembers, setTeamMembers] = useState({Name: "", Email: ""});


function handleChange(event) {

// This is seting up the user and email 
    const changingHandler = { ...teamMembers, [event.target.name]: event.target.value }
    console.log(
        "handleChage",
        event.target.name,
        event.target.value,
        changingHandler
    );
    setTeamMembers(changingHandler); 
// This is seting up the user 
}

// This is seting up the button to work 
function submit(now) {
    now.preventDefault();
   console.log("username", teamMembers)
}
// This is seting up the button to work 

    return(
        <form onSubmit={submit}> 
            <fieldset> 
            <legend> Sign Up here </legend> 
            <div> 
                <div> 
                    <p> Username </p>
                </div> 
                <div>
                    <input type="text" name="username" placeholder="Username" value={teamMembers.username}  onChange={handleChange} /> 
                 </div> 
            </div>
            <div> 
                 <div> 
                    <p> Email </p> 
                 </div>
                <div> 
                    <input type="email" name="email" placeholder="Email" value={teamMembers.email} onChange={handleChange} /> 
                </div>
            </div>
            <div>
               <div>
                    <button type="submit"> Submit </button>  
                </div> 
            </div> 
            </fieldset>
        </form>
    )
}

export default FormList; 
 





