import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import user from "../data/user";
import About from "../components/About";

function About({bio , links}) {
  console.log(bio ,links)
}

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {bio && bio !==""&&(<p>{bio}</p>)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* add your <Links /> component here */}
      <Links Links={links}/>
    </div>
  );
}
export default About;
