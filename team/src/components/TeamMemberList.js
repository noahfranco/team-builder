import React from 'react'
import TeamMemberCard from "./TeamMemberCard.js"

 function TeamMemberList(props) {
    return (
        <div>
            { props.members.map(member => <TeamMemberCard member={member}/> )}
        </div>
    );
}; 

export default TeamMemberList; 
