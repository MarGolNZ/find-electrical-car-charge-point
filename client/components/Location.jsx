import React, { useState } from 'react'


export default function Location() {
    const [location, setLocation] = useState('')

    function handleChange(evt) {
        console.log(evt.target.value)
        setLocation(evt.target.value)
    }

    function handleSubmit(evt) {

    }

    return (
        <div className='location-form'>
            <div className="form-row" onSubmit={handleSubmit}>
                <div className="col-6">
                    <input type="text" className="form-control" id="formGroupExampleInput" value={location} placeholder='Search for location' onChange={handleChange}></input>
                </div>
                <div className="col-6"><button type="button" className="btn btn-secondary">Search</button>
                </div>
            </div>
        </div>
    )
}
