import React from 'react'
import EightBall from './EightBall'


function Reset() {
    function handleClick() {
        console.log("clicked")
        EightBall.setMsg("Think of a question.")
        EightBall.setColor("blue")
    }

    return (
        <button className="button"
        onClick={handleClick}
        >Reset</button>
    )
};

export default Reset;