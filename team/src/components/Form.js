import React, { useState } from 'react'

function Form() {

const [formState, setFormState] = useState({
    name: "", 
    email: "", 
    role: "", 
})
    console.log(formState);

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value  
        })
    }
    return (
        <div>
            <form> 
                <input type="text" placeholder=" enter name" name="name" value={formState.name} onChange={ changeHandler } /> 
                <input  type="email" placeholder=" enter email" name="email" value={formState.email} onChange={ changeHandler }  /> 
                <input type="text" placeholder="enter role" name="role" onChange={ changeHandler }  /> 
                <button> submit </button>
            </form>
        </div>
    )
}

export default Form; 