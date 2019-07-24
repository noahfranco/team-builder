import React, { useState } from "react"; 

 
function FormList() {

const [teamMembers, setTeamMembers] = useState({Name: "", Email: ""});

// This is seting up the user 
function handler(event) {
    const creatingUser = { ...teamMembers, [event.target.name]: event.target.value }; 
    console.log("user change", event.target.name, event.target.value);
    setTeamMembers(handler); 
}
// This is seting up the user 

    return(
        <form> 
            <h2> Sign Up here </h2> 
            <div> 
                <div> 
                    <p> Username </p>
                </div> 
                <div>
                    <input type="text" placeholder="Username"/> 
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
        </form>
    )
}

export default FormList; 
 





