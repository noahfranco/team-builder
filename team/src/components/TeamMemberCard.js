import React from 'react'

 function TeamMemberCard(props) {
    return (
        <div>
            <div>
                <p> Name: { props.member.name } </p>
             </div> 
            <div> 
                <p> Email: { props.member.email } </p>
            </div>
            <div> 
                <p> Role: { props.member.role } </p> 
            </div>
            <div> 
                <button> Turn In </button>
            </div>
        </div>
    )
}

export default TeamMemberCard; 
