// Code Keypad Component Here
import React from "react";

function Keypad (){
    function inputchange() {
        console.log("Entering password...")
    } 
    return (
        <input type="password" onChange={inputchange}/>
        )
}

export default Keypad;
