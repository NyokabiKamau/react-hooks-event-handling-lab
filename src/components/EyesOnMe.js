// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe () {
    function focusBtn () {
        return console.log("Good!")
    } 

    function blurBtn () {
        return console.log("Hey! Eyes on me!")
    }
    return (
            <button onFocus={focusBtn} onBlur={blurBtn}>"Eyes on me"</button>
    )
}

export default EyesOnMe