import React from "react";


function Links (props) {
     return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>GitHub</a>
            <a href={props.linkedin}>LinkedIn</a>
       </div>
)}

export default Links;