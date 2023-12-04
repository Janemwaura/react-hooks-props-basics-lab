import React from "react";
import Links from "./links";

function About (props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {props.about && <p>{props.about}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.github && props.linkedin &&<Links github={props.github} linkedin={props.linkedin} />}
    </div>
  );
}

export default About;
