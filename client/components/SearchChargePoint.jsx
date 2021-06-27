import React from 'react'

export default function SearchChargePoint() {

    function clikcHandler(evt) {
        console.log(evt)
    }

    function handleChange(evt) {
        console.log(evt.target.value)
    }

    return (

        <>
            <div>Hello</div>
            {/* <input type='text' onChange={handleChange} value='point' plaholder="enter your query" />
            <input type='submit' onClick={clikcHandler}>Search</input> */}
        </>
    )
}


