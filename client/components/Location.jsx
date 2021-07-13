import React, { useState } from 'react'


export default function Location() {
    const [location, setLocation] = useState('')

    function handleChange(evt) {
        console.log(evt.target.value)
    }

    function handleClick(evt) {
        setLocation(evt.target.value)
    }

    return (
        <div className='box2'>
            <label>Search for a location</label>
            <input type='text' value={location} placeholder='enter location' onChange={handleChange}></input>
            <button type='submit' onClick={handleClick}>Search</button>
        </div>
    )
}
