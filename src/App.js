import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from "./seperate"

export default function App(){
    const conCon = data.map((item) => {
      return <Hero 
        key = {item.id}
        item = {item}
      />
    })
  return(
    <div>
      <Navbar/>
      {conCon}
    </div>
    
  )
}