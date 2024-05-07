import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../components/Home";
function Home(props){
  function Home({name,color,city}) {
   return(
    <div>
    id='home'
    <h1 style ={{color:props.color}}>
      {props.name}is a Web Developer from{props.city}
      <h1 style ={{color:props.color}}>
        {name} ia a Web Developer from {city}
      </h1>
      </div>
   ) 
  }
}
export default Home;