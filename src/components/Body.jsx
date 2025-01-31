import MenuBar from "./MenuBar";
import Menu from "./Menu";
import React from "react";
import {useState,useEffect} from 'react';

export default function Body() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


  function menuChange(title) {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div id="body">
      <MenuBar menuTitles={data} onMenuChange={menuChange} />
      <div id="menu-container">
        {data.map((item) => (
          <React.Fragment key={item.type}>
            <h2 id={item.type}> {item.type}</h2>
            <Menu menuItems={item.content} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
