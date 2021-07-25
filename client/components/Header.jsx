import React from 'react'
import Location from './Location'

export default function Header() {
    return (
        <div className='row'>
            <div className='col-9'>
                <h2 className='header-text'><i className="fas fa-charging-station"> Find Electrical Charge point in Australia and New Zealand</i></h2>
                <Location />
            </div>
            <div className='col-3'>
                <img src='3312001.jpg' className='header-car' alt='electric car image'></img>
            </div>
        </div>

    )
}
