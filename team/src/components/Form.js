import React, { useState } from "react"; 

 
function FormList() {

const [teamMembers, setTeamMembers] = useState({Name: "", Email: ""});

function handleChange(event) {

// This is seting up the user 
    const changingHandler = { ...teamMembers, [event.target.name]: event.target.value }
    console.log(
        "user change",
        event.target.name,
        event.target.value
    );
    setTeamMembers(changingHandler); 
// This is seting up the user 
}





    return(
        <form> 
            <fieldset> 
            <legend> Sign Up here </legend> 
            <div> 
                <div> 
                    <p> Username </p>
                </div> 
                <div>
                    <input type="text" placeholder="Username" onChange="handleChange"/> 
                 </div> 
            </div>
            <div> 
                 <div> 
                    <p> Email </p> 
                 </div>
                <div> 
                    <input type="email" placeholder="Email" /> 
                </div>
            </div>
            <div>
               <div>
                    <button> Submit </button>  
                </div> 
            </div> 
            </fieldset>
        </form>
    )
}

export default FormList; 
 





